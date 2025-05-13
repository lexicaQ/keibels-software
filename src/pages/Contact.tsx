import React, { useState, useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { Phone, Mail, MapPin, Linkedin, Clock } from 'lucide-react';
import Spline from '@splinetool/react-spline';

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
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
                  <a href="tel:+491734429624" className="flex items-start group hover:text-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-black">Telefon</h3>
                      <p className="text-gray-700">+49 1734429624</p>
                    </div>
                  </a>
                  
                  <a href="mailto:maxim.keibel@icloud.com" className="flex items-start group hover:text-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-black">E-Mail</h3>
                      <p className="text-gray-700">maxim.keibel@icloud.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-gray-700">Am Ring 3, Ismaning</p>
                    </div>
                  </div>
                  
                  <a href="https://www.linkedin.com/in/olav-keibel-5035b352/?originalSubdomain=de" target="_blank" rel="noopener noreferrer" className="flex items-start group hover:text-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-black">LinkedIn</h3>
                      <p className="text-gray-700">Profil ansehen</p>
                    </div>
                  </a>
                </div>
                
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Clock className="mr-2 h-5 w-5" /> Verfügbarkeit
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                    <p className="font-medium text-lg mb-3">Ich bin täglich für Sie erreichbar:</p>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="font-medium">Montag - Sonntag:</span>
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm">15:00 - 22:00 Uhr</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-600 text-sm italic">
                      Außerhalb dieser Zeiten erreichen Sie mich per E-Mail. Ich melde mich schnellstmöglich bei Ihnen zurück.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-black h-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                    alt="Maxim Keibel" 
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-black">
            <h2 className="text-2xl font-bold mb-4">Lass uns zusammenarbeiten!</h2>
            <p className="text-gray-700 mb-4">
              Ich freue mich auf spannende Projekte und neue Herausforderungen. 
              Kontaktieren Sie mich für eine unverbindliche Beratung oder um Ihr Projekt zu besprechen.
            </p>
            <div className="flex justify-center md:justify-start">
              <a 
                href="mailto:maxim.keibel@icloud.com" 
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                E-Mail schreiben
              </a>
            </div>
          </div>
          
          {/* Spline 3D Animation with black background */}
          <div className="mt-12 h-[500px] w-full bg-black rounded-xl overflow-hidden">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-black text-white">Loading 3D model...</div>}>
              <Spline scene="https://prod.spline.design/6eTbloMTV9rUOp0o/scene.splinecode" />
            </Suspense>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;

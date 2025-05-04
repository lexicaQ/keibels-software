
import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">ÜBER MICH</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="absolute inset-0 bg-black/10 blur-xl -z-10 rounded-full transform -translate-x-4 translate-y-4"></div>
              <div className="relative w-96 h-96 mx-auto overflow-hidden rounded-full border-4 border-black shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                  alt="Maxim Keibel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="h-full flex">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-black h-full flex flex-col justify-between">
                <div>
                  <p className="text-lg mb-6">
                    Ich bin ein sehr ehrlicher, hilfsbereiter und empathischer Mensch. Ich interessiere mich unter anderem für Fitness/Sport, Künstliche Intelligenz und ihren Nutzen/Anwendungsmöglichkeiten besonders im Bereich Software Development.
                  </p>
                  <p className="text-lg mb-6">
                    Ich brenne für meine Leidenschaften und wenn ich von einer Idee überzeugt bin, setze ich mich mit vollem Einsatz dafür ein, um nachhaltige und messbare Ergebnisse zu erzielen.
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <User className="mr-2" size={20} />
                      Erfahrung / Interessen
                    </h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <span>Webdesign</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <span>Medien/KI</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <span>Fitness/Sport</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <span>Kreatives Gestalten</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Sprachen</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <span>Deutsch (Muttersprache)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <span>Englisch (Verhandlungsfähig)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <span>Spanisch (Grundlagen)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-black"></span>
                        <span>Französisch (B1 Niveau)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Mehr über mich
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

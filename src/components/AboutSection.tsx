
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">ABOUT ME</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-black rounded-lg transform translate-x-4 translate-y-4"></div>
              <img 
                src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                alt="Maxim Keibel" 
                className="relative z-10 rounded-lg w-full h-auto object-cover"
              />
            </div>
            
            <div>
              <p className="text-lg mb-6">
                Ich bin ein sehr ehrlicher, hilfsbereiter und empathischer Mensch. Ich interessiere mich unter anderem für Fitness/Sport, Künstliche Intelligenz und ihren Nutzen/Anwendungsmöglichkeiten besonders im Bereich Software Development.
              </p>
              <p className="text-lg mb-6">
                Ich brenne für meine Leidenschaften und wenn ich von einer Idee überzeugt bin, setze ich mich mit vollem Einsatz dafür ein, um nachhaltige und messbare Ergebnisse zu erzielen.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Erfahrung / Interessen</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-2"></span>
                    Webdesign
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-2"></span>
                    Medien/KI
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-2"></span>
                    Fitness/Sport
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-2"></span>
                    Kreatives Gestalten
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Sprachen</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-2"></span>
                    Deutsch (Muttersprache)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-2"></span>
                    Englisch (Verhandlungsfähig)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-2"></span>
                    Spanisch (Grundlagen)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-2"></span>
                    Französisch (B1 Niveau)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

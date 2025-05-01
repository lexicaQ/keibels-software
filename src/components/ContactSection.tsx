
import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">KONTAKT</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Nehmen Sie Kontakt auf</h3>
                <p className="text-lg mb-8">
                  Haben Sie Interesse an einer Zusammenarbeit oder möchten Sie mehr über meine Projekte erfahren? 
                  Ich freue mich auf Ihre Nachricht!
                </p>
                
                <div className="space-y-6">
                  <a href="tel:+491734429624" className="flex items-center group hover:text-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-black">Telefon</h4>
                      <p>+49 1734429624</p>
                    </div>
                  </a>
                  
                  <a href="mailto:maxim.keibel@icloud.com" className="flex items-center group hover:text-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-black">E-Mail</h4>
                      <p>maxim.keibel@icloud.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p>Am Ring 3, Ismaning</p>
                    </div>
                  </div>

                  <a href="https://www.linkedin.com/in/olav-keibel-5035b352/?originalSubdomain=de" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-black">LinkedIn</h4>
                      <p>Profil ansehen</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Verfügbarkeit</h4>
                      <p>Täglich: 15:00 - 22:00 Uhr</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Mehr Informationen
                  </Link>
                </div>
              </div>
              
              <div className="relative flex justify-center">
                <div className="relative w-64 h-64 overflow-hidden rounded-full border-4 border-black shadow-xl">
                  <img src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" alt="Contact visual" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';
const ContactSection: React.FC = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">CONTACT ME</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-lg mb-8">
                  Hast du Interesse an einer Zusammenarbeit oder möchtest du mehr über meine Projekte erfahren? Ich freue mich auf deine Nachricht!
                </p>
                
                <div className="space-y-6">
                  <a href="tel:+491734429624" className="flex items-start group hover:text-gray-600 transition-colors">
                    <Phone size={24} className="mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-black">Telefon</h4>
                      <p>+49 1734429624</p>
                    </div>
                  </a>
                  
                  <a href="mailto:maxim.keibel@icloud.com" className="flex items-start group hover:text-gray-600 transition-colors">
                    <Mail size={24} className="mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-black">E-Mail</h4>
                      <p>maxim.keibel@icloud.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start">
                    <MapPin size={24} className="mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p>Am Ring 3, Ismaning</p>
                    </div>
                  </div>

                  <a href="https://www.linkedin.com/in/olav-keibel-5035b352/?originalSubdomain=de" target="_blank" rel="noopener noreferrer" className="flex items-start group hover:text-gray-600 transition-colors">
                    <Linkedin size={24} className="mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-black">LinkedIn</h4>
                      <p>Profil ansehen</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <img src="/lovable-uploads/c0d5dc91-7451-4e20-a60d-82c907cfd8b6.png" alt="Contact visual" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
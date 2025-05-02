
import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">KONTAKT</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white backdrop-blur-md rounded-lg shadow-xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Nehmen Sie Kontakt auf</h3>
                <p className="text-lg mb-8">
                  Haben Sie Interesse an einer Zusammenarbeit oder möchten Sie mehr über meine Projekte erfahren? 
                  Ich freue mich auf Ihre Nachricht!
                </p>
                
                <div className="space-y-6">
                  <a href="tel:+491734429624" className="flex items-center group hover:text-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:shadow-md transition-all">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-black">Telefon</h4>
                      <p>+49 1734429624</p>
                    </div>
                  </a>
                  
                  <a href="mailto:maxim.keibel@icloud.com" className="flex items-center group hover:text-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:shadow-md transition-all">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-black">E-Mail</h4>
                      <p>maxim.keibel@icloud.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p>Am Ring 3, Ismaning</p>
                    </div>
                  </div>

                  <a href="https://www.linkedin.com/in/olav-keibel-5035b352/?originalSubdomain=de" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:shadow-md transition-all">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-black">LinkedIn</h4>
                      <p>Profil ansehen</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Verfügbarkeit</h4>
                      <p>Montag - Sonntag: 15:00 - 22:00 Uhr</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    Mehr Informationen
                  </Link>
                </div>
              </div>
              
              <div className="relative flex justify-center">
                <div className="w-full max-w-md backdrop-filter backdrop-blur-sm bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-xl border border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-center">Kontaktzeiten</h4>
                  
                  <div className="space-y-4 mb-6">
                    {['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'].map((day, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="font-medium">{day}:</span>
                        <span>15:00 - 22:00 Uhr</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center text-sm text-gray-600 mt-4">
                    <p>Bevorzugen Sie eine Terminvereinbarung?</p>
                    <a href="mailto:maxim.keibel@icloud.com" className="text-black font-medium hover:underline">
                      Schreiben Sie mir eine E-Mail
                    </a>
                  </div>
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

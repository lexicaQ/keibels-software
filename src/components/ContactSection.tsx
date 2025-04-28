
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">CONTACT ME</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              Hast du Interesse an einer Zusammenarbeit oder möchtest du mehr über meine Projekte erfahren? Ich freue mich auf deine Nachricht!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone size={24} className="mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <p>+49 1734429624</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={24} className="mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">E-Mail</h3>
                  <p>maxim.keibel@icloud.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={24} className="mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p>Am Ring 3, Ismaning</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Deine E-Mail"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Betreff</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Betreff"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Nachricht</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Deine Nachricht"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

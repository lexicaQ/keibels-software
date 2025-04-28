
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Maxim Keibel</h3>
            <p className="text-gray-300">Software Developer</p>
            <p className="text-gray-300 mt-2">Am Ring 3, Ismaning</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://www.linkedin.com/in/olav-keibel-5035b352/?originalSubdomain=de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.taskforce.net/de/manager/interim-executives/manager/47-olav-keibel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <span className="font-bold">TF</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300">+49 1734429624</p>
            <p className="text-gray-300">maxim.keibel@icloud.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maxim Keibel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

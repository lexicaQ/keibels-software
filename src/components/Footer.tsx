
import React, { useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer ref={footerRef} className="relative bg-black text-white py-16 overflow-hidden">
      {/* Blurry background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl bg-white/5"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              opacity: 0.03 + i * 0.01,
              animation: `footerPulse${i} ${8 + i}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          {/* Logo in circle */}
          <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full mb-6 p-1 border border-white/10">
            <img 
              src="/lovable-uploads/d125fca8-54df-4c60-8508-951b68ecde5d.png"
              alt="Keibel Software Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center mb-12">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <li><Link to="/" className="hover:text-gray-400 transition-colors">HOME</Link></li>
            <li><Link to="/projects" className="hover:text-gray-400 transition-colors">PROJEKTE</Link></li>
            <li><Link to="/resume" className="hover:text-gray-400 transition-colors">LEBENSLAUF</Link></li>
            <li><Link to="/about" className="hover:text-gray-400 transition-colors">ÜBER MICH</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition-colors">KONTAKT</Link></li>
          </ul>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <p className="text-gray-400">+49 1734429624</p>
            <p className="text-gray-400">maxim.keibel@icloud.com</p>
            <p className="text-gray-400">Am Ring 3, Ismaning</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/maxim-keibel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors p-2"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/max1m-d3v" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors p-2"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Keibel Software.</p>
            <p className="text-sm text-gray-500">All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Animation styles for footer blurs */}
      <style>
        {`
          @keyframes footerPulse0 {
            0%, 100% { transform: scale(1); opacity: 0.03; }
            50% { transform: scale(1.1); opacity: 0.05; }
          }
          @keyframes footerPulse1 {
            0%, 100% { transform: scale(1); opacity: 0.04; }
            50% { transform: scale(1.05); opacity: 0.06; }
          }
          @keyframes footerPulse2 {
            0%, 100% { transform: scale(1); opacity: 0.03; }
            50% { transform: scale(1.08); opacity: 0.05; }
          }
          @keyframes footerPulse3 {
            0%, 100% { transform: scale(1); opacity: 0.04; }
            50% { transform: scale(1.12); opacity: 0.07; }
          }
          @keyframes footerPulse4 {
            0%, 100% { transform: scale(1); opacity: 0.03; }
            50% { transform: scale(1.06); opacity: 0.05; }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white py-20 overflow-hidden">
      {/* Moderne Blur-Hintergrundelemente */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-white/5 filter blur-[120px] top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-white/3 filter blur-[100px] top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-white/2 filter blur-[80px] bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo & Social Links */}
          <div className="flex flex-col items-center mb-16">
            <Link to="/" className="mb-10 transition-transform hover:scale-105 duration-300">
              <img 
                src="/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png" 
                alt="KEIBEL SOFTWARE Logo" 
                className="h-16 w-auto"
              />
            </Link>
            
            <div className="flex space-x-8">
              <a 
                href="https://www.linkedin.com/in/maxim-keibel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect p-4 rounded-full transition-all duration-300 hover:bg-white/10 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://github.com/max1m-d3v" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect p-4 rounded-full transition-all duration-300 hover:bg-white/10 group"
                aria-label="GitHub"
              >
                <Github size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/projects" className="text-white/70 hover:text-white transition-colors">Projekte</Link></li>
                <li><Link to="/resume" className="text-white/70 hover:text-white transition-colors">Lebenslauf</Link></li>
                <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">Über mich</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Kontakt</h3>
              <p className="text-white/70 mb-2">+49 1734429624</p>
              <p className="text-white/70 mb-2">maxim.keibel@icloud.com</p>
              <p className="text-white/70">Am Ring 3, Ismaning</p>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Über</h3>
              <p className="text-white/70 mb-4">
                KEIBEL SOFTWARE entwickelt professionelle Web- und App-Lösungen mit modernen Technologien und ansprechendem Design.
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} KEIBEL SOFTWARE. Alle Rechte vorbehalten.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">Datenschutz</Link>
                <Link to="/imprint" className="text-sm text-white/50 hover:text-white transition-colors">Impressum</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12">
      {/* Subtle white line above footer */}
      <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5"></div>
      
      {/* Decorative blur elements */}
      <div className="absolute -top-40 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-[150px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-[200px] opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold">KEIBEL</Link>
            <p className="text-gray-400 mt-2">Software Development</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:example@example.com" className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Maxim Keibel. All rights reserved.</p>
          
          <div className="flex mt-4 md:mt-0 space-x-6">
            <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
              Über mich
            </Link>
            <Link to="/projects" className="text-gray-400 hover:text-white text-sm transition-colors">
              Projekte
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Kontakt
            </Link>
            <Link to="/imprint" className="text-gray-400 hover:text-white text-sm transition-colors">
              Impressum
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

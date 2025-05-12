import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { text: 'Startseite', url: '/' },
        { text: 'Projekte', url: '/projects' },
        { text: 'Lebenslauf', url: '/resume' },
        { text: 'Über mich', url: '/about' },
        { text: 'Kontakt', url: '/contact' },
      ],
    },
    {
      title: 'Projekte',
      links: [
        { text: 'CopyClipCloud', url: '/projects/copyclipcloud' },
        { text: 'AppTimer', url: '/projects/apptimer' },
        { text: 'Zentro', url: '/projects/zentro' },
      ],
    },
    {
      title: 'Rechtliches',
      links: [
        { text: 'Impressum', url: '/imprint' },
        { text: 'Datenschutz', url: '/privacy' },
      ],
    },
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png" 
                alt="KEIBEL SOFTWARE Logo" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Premium Software-Entwicklung und moderne digitale Lösungen für anspruchsvolle Kunden und Projekte.
            </p>
          </div>
          
          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.url} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Separator */}
        <div className="w-full h-px bg-white/10 my-6"></div>
        
        {/* Copyright and additional links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50 text-center">© KEIBEL SOFTWARE. Alle Rechte vorbehalten.</p>
          
          <div className="flex mt-4 md:mt-0">
            <Link to="/imprint" className="text-xs text-white/50 hover:text-white mx-3 transition-colors">
              Impressum
            </Link>
            <Link to="/privacy" className="text-xs text-white/50 hover:text-white mx-3 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

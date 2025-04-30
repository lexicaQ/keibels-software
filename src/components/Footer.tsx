
import React, { useRef, useEffect } from 'react';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blurElementsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();

      // Calculate mouse position relative to container
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      blurElementsRef.current.forEach((element, index) => {
        if (!element) return;
        const speed = 0.7 + index * 0.15;
        const moveX = x * 30 * speed;
        const moveY = y * 30 * speed;
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <footer ref={containerRef} className="relative bg-black text-white py-20 overflow-hidden">
      {/* Enhanced blur background elements */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i} 
          ref={el => el && (blurElementsRef.current[i] = el)} 
          className="absolute rounded-full bg-white/5 filter blur-[100px]"
          style={{
            width: `${400 + i * 100}px`,
            height: `${400 + i * 100}px`,
            left: `${10 + (i % 4) * 20}%`,
            top: `${15 + Math.floor(i/4) * 30}%`,
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo & Social Links - Larger Logo */}
          <div className="flex flex-col items-center mb-16">
            <Link to="/" className="mb-10 transition-transform hover:scale-105 duration-300">
              <img 
                src="/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png" 
                alt="KEIBEL SOFTWARE Logo" 
                className="h-24 w-auto" // Increased size from h-16 to h-24
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
                <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Startseite</Link></li>
                <li><Link to="/projects" className="text-white/70 hover:text-white transition-colors">Projekte</Link></li>
                <li><Link to="/resume" className="text-white/70 hover:text-white transition-colors">Lebenslauf</Link></li>
                <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">Über mich</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Kontakt</h3>
              <a href="tel:+491734429624" className="text-white/70 hover:text-white block mb-2 transition-colors">
                <div className="flex justify-center items-center">
                  <Phone size={16} className="mr-2" />
                  +49 1734429624
                </div>
              </a>
              <a href="mailto:maxim.keibel@icloud.com" className="text-white/70 hover:text-white block mb-2 transition-colors">
                <div className="flex justify-center items-center">
                  <Mail size={16} className="mr-2" />
                  maxim.keibel@icloud.com
                </div>
              </a>
              <div className="flex justify-center items-center text-white/70">
                <MapPin size={16} className="mr-2" />
                Am Ring 3, Ismaning
              </div>
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

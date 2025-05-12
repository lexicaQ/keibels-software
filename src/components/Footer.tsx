import React, { useRef, useEffect } from 'react';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blurElementsRef = useRef<HTMLDivElement[]>([]);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const {
          clientX,
          clientY
        } = e;
        const {
          left,
          top,
          width,
          height
        } = containerRef.current.getBoundingClientRect();

        // Calculate mouse position relative to container
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        blurElementsRef.current.forEach((element, index) => {
          if (!element) return;
          const speed = 0.5 + index * 0.1; // Smoother, slower movement
          const moveX = x * 25 * speed;
          const moveY = y * 25 * speed;
          element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
      };
      const container = containerRef.current;
      if (container) {
        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
      }
    }
  }, [isMobile]);

  // Ensure elements are displayed immediately
  useEffect(() => {
    blurElementsRef.current.forEach(element => {
      if (element) {
        element.style.opacity = '1';
        element.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-in';
      }
    });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (isMobile) {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
    <footer ref={containerRef} className="relative bg-black text-white py-20 overflow-hidden">
      {/* Add subtle separator line */}
      <Separator className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/5 via-white/15 to-white/5" />
      
      {/* Enhanced blur background elements - fewer, larger, more blurry */}
      {[...Array(isMobile ? 3 : 5)].map((_, i) => (
        <div 
          key={i} 
          ref={el => el && (blurElementsRef.current[i] = el)} 
          className="absolute rounded-full filter blur-[150px] bg-white/3 opacity-0"
          style={{
            width: `${500 + i * 150}px`,
            height: `${500 + i * 150}px`,
            left: `${15 + i % 3 * 25}%`,
            top: `${20 + Math.floor(i / 3) * 30}%`,
            transform: 'translate(0px, 0px)',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-in'
          }} 
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo & Social Links */}
          <div className="flex flex-col items-center mb-16">
            <Link to="/" className="mb-10 transition-transform hover:scale-105 duration-300">
              <img alt="KEIBEL SOFTWARE Logo" className="h-24 w-auto" src="/lovable-uploads/ac1ecae5-610b-48f0-8d7e-3799fd748ceb.png" />
            </Link>
            
            <div className="flex space-x-8">
              <a href="https://www.linkedin.com/in/maxim-keibel/" target="_blank" rel="noopener noreferrer" className="glass-effect p-4 rounded-full transition-all duration-300 hover:bg-white/10 group" aria-label="LinkedIn">
                <Linkedin size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a href="https://github.com/max1m-d3v" target="_blank" rel="noopener noreferrer" className="glass-effect p-4 rounded-full transition-all duration-300 hover:bg-white/10 group" aria-label="GitHub">
                <Github size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/70 hover:text-white transition-colors">
                    Startseite
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-white/70 hover:text-white transition-colors">
                    Projekte
                  </Link>
                </li>
                <li>
                  <Link to="/resume" className="text-white/70 hover:text-white transition-colors">
                    Lebenslauf
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                    Über mich
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
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
          <div className="border-t border-white/10 pt-8 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} KEIBEL SOFTWARE. Alle Rechte vorbehalten.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">
                  Datenschutz
                </Link>
                <Link to="/imprint" className="text-sm text-white/50 hover:text-white transition-colors">
                  Impressum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

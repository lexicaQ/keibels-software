
import React, { useEffect, useRef } from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!footerRef.current) return;
      
      const { left, top, width, height } = footerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const elements = footerRef.current.querySelectorAll('.animate-on-mouse');
      elements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        }
      });
    };

    const footer = footerRef.current;
    if (footer) {
      footer.addEventListener('mousemove', handleMouseMove);
      return () => {
        footer.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-black text-white py-16 overflow-hidden">
      {/* Blurry background elements ähnlich wie in der Hero Section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-white/5 filter blur-[80px] top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-white/3 filter blur-[60px] top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-white/2 filter blur-[100px] bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 mb-6 animate-on-mouse transition-transform duration-300">
            <img 
              src="/lovable-uploads/c0d5dc91-7451-4e20-a60d-82c907cfd8b6.png" 
              alt="MK Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <nav className="flex justify-center mb-12">
          <ul className="flex space-x-8 text-sm">
            <li><a href="/" className="hover:text-gray-400 transition-colors">HOME</a></li>
            <li><a href="/projects" className="hover:text-gray-400 transition-colors">PROJEKTE</a></li>
            <li><a href="/resume" className="hover:text-gray-400 transition-colors">LEBENSLAUF</a></li>
            <li><a href="/about" className="hover:text-gray-400 transition-colors">ÜBER MICH</a></li>
            <li><a href="/contact" className="hover:text-gray-400 transition-colors">KONTAKT</a></li>
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
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/maxim-keibel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors p-2 flex flex-col items-center"
              >
                <Linkedin size={24} />
                <span className="text-xs mt-1">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/max1m-d3v" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors p-2 flex flex-col items-center"
              >
                <Github size={24} />
                <span className="text-xs mt-1">GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Maxim Keibel.</p>
            <p className="text-sm text-gray-500">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

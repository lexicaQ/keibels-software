
import React, { useEffect, useRef } from 'react';
import { Linkedin } from 'lucide-react';

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
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="animate-on-mouse absolute bg-white/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: '1px',
                transform: 'rotate(45deg)',
                transition: 'transform 0.3s ease-out'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="w-12 h-12 bg-white rounded-full mb-6 animate-on-mouse transition-transform duration-300">
            <div className="w-full h-full flex items-center justify-center text-black font-bold text-xl">
              MK
            </div>
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
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/olav-keibel-5035b352/?originalSubdomain=de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors p-2"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.taskforce.net/de/manager/interim-executives/manager/47-olav-keibel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors p-2"
              >
                <span className="font-bold">TF</span>
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

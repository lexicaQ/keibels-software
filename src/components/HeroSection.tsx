import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blurElementsRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
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

      // Subtile Bewegungseffekte
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      blurElementsRef.current.forEach((element, index) => {
        if (!element) return;
        const speed = 0.3 + index * 0.1; // Reduzierte Geschwindigkeit
        const moveX = x * 20 * speed;
        const moveY = y * 20 * speed;
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Hintergrundeffekte */}
      {[...Array(5)].map((_, i) => <div key={i} ref={el => el && (blurElementsRef.current[i] = el)} className="absolute rounded-full blur-3xl bg-white/5" style={{
      width: `${300 + i * 100}px`,
      height: `${300 + i * 100}px`,
      left: `${20 + i * 10}%`,
      top: `${30 + i * 8}%`,
      transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
    }} />)}

      <div ref={containerRef} className="relative w-full max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in tracking-tight">
            MAXIM KEIBEL
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-fade-in-delayed tracking-wide">
            Software Developer | UI/UX Designer | App Creator
          </p>
          <p className="text-gray-400 mb-10 animate-fade-in-delayed">
            Kreative Lösungen für moderne Herausforderungen
          </p>
          <div className="flex flex-wrap gap-6 animate-fade-in-delayed">
            <Link to="#projects" className="glass-button group">
              <span className="relative z-10 flex items-center">
                Projekte ansehen
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link to="/contact" className="modern-button">
              <span className="relative z-10">Kontakt</span>
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Modernere Bildpräsentation mit Glaseffekt */}
          <div className="absolute inset-0 transform translate-x-4 translate-y-4 rounded-2xl border border-white/10"></div>
          <div className="absolute inset-0 transform translate-x-2 translate-y-2 rounded-2xl border border-white/5"></div>
          <div className="relative glass-card rounded-2xl shadow-2xl overflow-hidden">
            <img src="/lovable-uploads/e36821f6-318f-46d5-9644-7d65d6ba2cc9.png" alt="Maxim Keibel" className="w-full h-auto object-cover aspect-[4/3]" />
            
            {/* Overlay mit Glaseffekt */}
            
          </div>
        </div>
      </div>
      
      {/* Scroll-Down-Pfeil */}
      <a href="#projects" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 hover:text-white transition-colors">
        <span className="text-xs uppercase tracking-widest mb-2">Entdecken</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </a>
    </section>;
};
export default HeroSection;
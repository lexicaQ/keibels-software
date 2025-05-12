
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { title: 'Startseite', path: '/' },
    { title: 'Projekte', path: '/projects' },
    { title: 'Lebenslauf', path: '/resume' },
    { title: 'Über mich', path: '/about' },
    { title: 'Kontakt', path: '/contact' },
  ];

  return (
    <>
      {/* Logo über der Navbar - zentriert und größer */}
      <div className="w-full flex justify-between items-center bg-black pt-4 md:pt-10 pb-3 md:pb-6 px-4">
        <Link to="/" className="flex-1 flex justify-center">
          <img 
            src="/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png" 
            alt="KEIBEL SOFTWARE Logo" 
            className="h-24 md:h-24 w-auto transition-all duration-300 hover:opacity-80"
          />
        </Link>
        
        {/* Mobile Menu Button positioned on the right side aligned with logo */}
        <button 
          className="absolute right-4 top-[36px] md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Navbar with black background */}
      <nav className="w-full bg-black shadow-lg shadow-black/10 sticky top-0 z-40 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between md:justify-center">
          {/* Desktop Menu - zentriert */}
          <ul className="hidden md:flex space-x-16">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link 
                  to={item.path} 
                  className="text-white/90 font-medium text-sm uppercase tracking-wider transition-colors duration-300 hover:text-white"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Add subtle white/gray separator line */}
      <Separator className="h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5" />

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="p-2 text-white">
            <X size={24} />
          </button>
        </div>
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png" 
            alt="KEIBEL SOFTWARE Logo" 
            className="h-20 w-auto"
          />
        </div>
        <ul className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className="text-xl font-medium tracking-wide text-white uppercase"
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

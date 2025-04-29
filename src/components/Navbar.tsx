
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin } from 'lucide-react';

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
    { title: 'Start', path: '/' },
    { title: 'Projekte', path: '/projects' },
    { title: 'Lebenslauf', path: '/resume' },
    { title: 'Über mich', path: '/about' },
    { title: 'Kontakt', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black shadow-md pt-16">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-center items-center">
        {/* Desktop Menu - Centered */}
        <ul className="hidden md:flex space-x-8 justify-center">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link 
                to={item.path} 
                className="text-white/90 font-medium transition-colors duration-300 hover:text-white"
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 w-6 focus:outline-none"
          onClick={toggleMenu}
        >
          <div className={`hamburger-line bg-white ${isOpen ? 'rotate-45' : ''}`}></div>
          <div className={`hamburger-line bg-white ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`hamburger-line bg-white ${isOpen ? '-rotate-45' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="p-2 text-white">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className="text-2xl font-medium tracking-wide text-white"
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

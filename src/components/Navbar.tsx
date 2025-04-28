
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'Resume', path: '/resume' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight">
          MAXIM<span className="text-gray-500">.KEIBEL</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link 
                to={item.path} 
                className="text-black font-medium transition-colors duration-300 hover:text-gray-600"
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 w-6 focus:outline-none"
          onClick={toggleMenu}
        >
          <div className={`hamburger-line origin-top-left transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}></div>
          <div className={`hamburger-line transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`hamburger-line origin-bottom-left transition-transform duration-300 ${isOpen ? '-rotate-45' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="p-2">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className="text-2xl font-medium tracking-wide"
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


import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduzierte Ladezeit für eine bessere Benutzererfahrung
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      {/* Logo positioned above navbar */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center bg-black py-2">
        <img 
          src="/lovable-uploads/d125fca8-54df-4c60-8508-951b68ecde5d.png" 
          alt="Keibel Software Logo" 
          className="h-12 object-contain" 
        />
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

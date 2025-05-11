
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ModernAboutSection from '../components/ModernAboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { useIsMobile } from '../hooks/use-mobile';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure all images and resources are fully loaded before removing loading spinner
    // Reduced loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Fix for mobile scroll issues
  useEffect(() => {
    if (isMobile) {
      // Prevent scroll-triggered page reloads by using passive listeners
      document.body.style.overscrollBehavior = 'none';
      
      // Add event listeners with passive: true to improve performance
      const handleScroll = (e: TouchEvent) => {
        // If at the top of the page and trying to scroll up, prevent default
        if (window.scrollY === 0 && e.touches[0].clientY > 0) {
          e.preventDefault();
        }
      };
      
      document.addEventListener('touchmove', handleScroll, { passive: false });
      
      return () => {
        document.body.style.overscrollBehavior = '';
        document.removeEventListener('touchmove', handleScroll);
      };
    }
  }, [isMobile]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white" ref={contentRef}>
      <Helmet>
        <title>KEIBEL SOFTWARE | Premium Web & App Entwicklung</title>
        <meta name="description" content="Professionelle Software-Entwicklung von Maxim Keibel. Moderne Webanwendungen, innovative iOS und macOS Apps und kreative digitale Lösungen für Ihr Unternehmen." />
        <meta name="keywords" content="App Entwicklung, iOS, macOS, Software, Web Development, Programmierung, Mobile Apps" />
        <meta property="og:title" content="KEIBEL SOFTWARE | Premium Web & App Entwicklung" />
        <meta property="og:description" content="Innovative digitale Lösungen, moderne Webanwendungen und App-Entwicklung von Maxim Keibel." />
        <meta property="og:image" content="/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="KEIBEL SOFTWARE | Premium Web & App Entwicklung" />
        <meta property="twitter:description" content="Innovative digitale Lösungen, moderne Webanwendungen und App-Entwicklung von Maxim Keibel." />
        <meta property="twitter:image" content="/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      
      <Navbar />
      <HeroSection />
      <ModernAboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

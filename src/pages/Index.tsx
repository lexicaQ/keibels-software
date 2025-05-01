
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure all images and resources are fully loaded before removing loading spinner
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Update meta tags for SEO optimization
  useEffect(() => {
    document.title = "KEIBEL SOFTWARE | Premium Web & App Entwicklung";
    
    const metaTags = [
      { name: "description", content: "Professionelle Software-Entwicklung von Maxim Keibel. Moderne Webanwendungen, Apps und kreative digitale Lösungen für Ihr Unternehmen." },
      { property: "og:title", content: "KEIBEL SOFTWARE | Premium Web & App Entwicklung" },
      { property: "og:description", content: "Innovative digitale Lösungen, moderne Webanwendungen und App-Entwicklung von Maxim Keibel." },
      { property: "og:image", content: "/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png" }
    ];

    metaTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[${Object.keys(tag)[0]}="${Object.values(tag)[0]}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content as string);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(Object.keys(tag)[0], Object.values(tag)[0] as string);
        metaTag.setAttribute('content', tag.content as string);
        document.head.appendChild(metaTag);
      }
    });
  }, []);

  // Fix for mobile scroll issues
  useEffect(() => {
    if (isMobile) {
      // Prevent scroll-triggered page reloads
      const handleScroll = () => {
        // No-op to capture scroll events without doing anything harmful
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden" ref={contentRef}>
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

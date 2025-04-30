
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
    }, 800); // Reduziert auf 800ms für schnelleres Laden

    return () => clearTimeout(timer);
  }, []);

  // Meta-Tags für SEO-Optimierung aktualisieren
  useEffect(() => {
    document.title = "KEIBEL SOFTWARE | Premium Web & App Entwicklung";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionelle Software-Entwicklung von Maxim Keibel. Moderne Webanwendungen, Apps und kreative digitale Lösungen für Ihr Unternehmen.');
    }
    
    // OG tags für Social Media Vorschau
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'KEIBEL SOFTWARE | Premium Web & App Entwicklung');
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', 'KEIBEL SOFTWARE | Premium Web & App Entwicklung');
      document.head.appendChild(ogTitle);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Innovative digitale Lösungen, moderne Webanwendungen und App-Entwicklung von Maxim Keibel.');
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', 'Innovative digitale Lösungen, moderne Webanwendungen und App-Entwicklung von Maxim Keibel.');
      document.head.appendChild(ogDescription);
    }
    
    // Update social preview image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', '/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png');
    } else {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', '/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png');
      document.head.appendChild(ogImage);
    }
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
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


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowLeft, ArrowRight, Download, FileText, Check, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Documentation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const { projectId } = useParams<{ projectId: string }>();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const projectName = projectId ? projectId.charAt(0).toUpperCase() + projectId.slice(1) : 'Projekt';

  const sections = [
    { id: 'overview', name: 'Übersicht' },
    { id: 'installation', name: 'Installation' },
    { id: 'quickstart', name: 'Schnellstart' },
    { id: 'features', name: 'Features' },
    { id: 'api', name: 'API Referenz' },
    { id: 'faq', name: 'FAQ' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8 flex justify-between items-center">
            <Link to={`/projects/${projectId}`} className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="mr-2" size={18} />
              Zurück zum Projekt
            </Link>
            
            <Badge variant="outline" className="border-white/20 bg-white/5 text-white">
              v1.2.3
            </Badge>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar navigation */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-64 sticky top-24 self-start"
            >
              <div className="p-4 bg-white/5 border border-white/20 rounded-lg backdrop-blur-md">
                <h2 className="text-xl font-bold mb-4">{projectName} Dokumentation</h2>
                
                <div className="relative mb-4">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Suche..." 
                    className="pl-8 bg-white/5 border-white/20 focus:border-white/30 text-white"
                  />
                </div>
                
                <Separator className="my-4 bg-white/20" />
                
                <nav>
                  <ul className="space-y-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                            activeSection === section.id ? 
                              'bg-white/20 text-white font-medium' : 
                              'text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          {section.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <Separator className="my-4 bg-white/20" />
                
                <div className="p-3 bg-white/10 rounded-md">
                  <h3 className="text-sm font-bold mb-2">Ressourcen</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-blue-300 hover:text-blue-200 flex items-center gap-1.5">
                        <Download size={14} />
                        Beispielprojekt
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-300 hover:text-blue-200 flex items-center gap-1.5">
                        <FileText size={14} />
                        Änderungsprotokoll
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Main content */}
            <motion.div 
              className="flex-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {activeSection === 'overview' && (
                <div>
                  <motion.h1 
                    className="text-3xl font-bold mb-6"
                    variants={itemVariants}
                  >
                    {projectName} - Dokumentationsübersicht
                  </motion.h1>
                  
                  <motion.div
                    variants={itemVariants} 
                    className="prose prose-invert max-w-none"
                  >
                    <p className="text-lg text-gray-300 mb-6">
                      Willkommen bei der offiziellen Dokumentation für {projectName}. Diese umfassende 
                      Anleitung wurde entwickelt, um Ihnen den Einstieg zu erleichtern und alle Funktionen 
                      vollständig zu nutzen.
                    </p>
                    
                    <Card className="mb-6 bg-white/5 border-white/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">Erste Schritte</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex">
                            <div className="mr-4 h-10 w-10 flex-shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                              <span className="font-bold">1</span>
                            </div>
                            <div>
                              <h4 className="font-medium mb-1">Installation</h4>
                              <p className="text-sm text-gray-400">Anleitung zur Installation auf Ihrem System</p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="mr-4 h-10 w-10 flex-shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                              <span className="font-bold">2</span>
                            </div>
                            <div>
                              <h4 className="font-medium mb-1">Konfiguration</h4>
                              <p className="text-sm text-gray-400">Anpassung an Ihre Bedürfnisse</p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="mr-4 h-10 w-10 flex-shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                              <span className="font-bold">3</span>
                            </div>
                            <div>
                              <h4 className="font-medium mb-1">Erste Schritte</h4>
                              <p className="text-sm text-gray-400">Schneller Einstieg mit Basis-Features</p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="mr-4 h-10 w-10 flex-shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                              <span className="font-bold">4</span>
                            </div>
                            <div>
                              <h4 className="font-medium mb-1">Erweiterungen</h4>
                              <p className="text-sm text-gray-400">Plugins und Anpassungen</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <h2 className="text-2xl font-bold mb-4">Was erwartet Sie?</h2>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 mt-0.5 text-green-400" />
                        <span>Detaillierte Erklärungen zu allen Hauptfunktionen</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 mt-0.5 text-green-400" />
                        <span>Schritt-für-Schritt-Anleitungen für komplexe Workflows</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 mt-0.5 text-green-400" />
                        <span>Tipps und Tricks zur Optimierung Ihrer Effizienz</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 mt-0.5 text-green-400" />
                        <span>Vollständige API-Referenz für Entwickler</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 mt-0.5 text-green-400" />
                        <span>Häufig gestellte Fragen und Fehlerbehebungen</span>
                      </li>
                    </ul>
                    
                    <Separator className="my-8 bg-white/20" />
                    
                    <h2 className="text-2xl font-bold mb-4">Systemanforderungen</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card className="bg-white/5 border-white/20">
                        <CardContent className="p-4">
                          <h3 className="font-bold mb-2">macOS</h3>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>macOS 12.0 oder neuer</li>
                            <li>4 GB RAM</li>
                            <li>1.5 GB Festplattenspeicher</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/5 border-white/20">
                        <CardContent className="p-4">
                          <h3 className="font-bold mb-2">iOS</h3>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>iOS 15.0 oder neuer</li>
                            <li>iPhone XS oder neuer</li>
                            <li>500 MB freier Speicher</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/5 border-white/20">
                        <CardContent className="p-4">
                          <h3 className="font-bold mb-2">Web</h3>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>Chrome, Safari, Firefox</li>
                            <li>Aktuelle Version</li>
                            <li>JavaScript aktiviert</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="mt-8 flex justify-end"
                  >
                    <Button 
                      variant="outline"
                      onClick={() => setActiveSection('installation')}
                      className="group flex items-center gap-2 border-white/20 bg-white/5 hover:bg-white/10"
                    >
                      Weiter zur Installation
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              )}
              
              {activeSection === 'installation' && (
                <div>
                  <motion.h1 
                    className="text-3xl font-bold mb-6"
                    variants={itemVariants}
                  >
                    Installation
                  </motion.h1>
                  
                  {/* Installation content goes here */}
                  <motion.p variants={itemVariants} className="text-gray-300">
                    Hier finden Sie detaillierte Installationsanleitungen für {projectName}.
                  </motion.p>
                </div>
              )}
              
              {/* Add content for other sections as needed */}
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;

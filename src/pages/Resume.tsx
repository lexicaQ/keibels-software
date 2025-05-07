
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowRight, DownloadIcon } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { supabase, RESUME_BUCKET } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('education');
  const [isDownloading, setIsDownloading] = useState(false);
  const [resumeData, setResumeData] = useState(null);

  // Fetch resume file information from database
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const { data, error } = await supabase
          .from('resume_files')
          .select('*')
          .eq('active', true)
          .limit(1);
        
        if (error) {
          console.error('Error fetching resume data:', error);
        } else if (data && data.length > 0) {
          setResumeData(data[0]);
        }
      } catch (err) {
        console.error('Failed to fetch resume data:', err);
      }
    };
    
    fetchResumeData();
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // Reduced loading time
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);
      
      if (!resumeData) {
        throw new Error('Kein Lebenslauf verfügbar');
      }

      // Get file data directly using download method
      const { data: fileData, error } = await supabase
        .storage
        .from(RESUME_BUCKET)
        .download(resumeData.storage_path);
      
      if (error) {
        console.error('Error downloading file:', error);
        throw new Error('Fehler beim Herunterladen der Datei: ' + error.message);
      }
      
      if (!fileData) {
        throw new Error('Keine Datei gefunden');
      }
      
      // Create blob URL from file data
      const url = URL.createObjectURL(fileData);
      
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = resumeData.filename || 'lebenslauf.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up blob URL after download
      setTimeout(() => URL.revokeObjectURL(url), 100);
      
      toast({
        title: "Erfolg!",
        description: "Lebenslauf wurde heruntergeladen.",
      });
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast({
        title: "Fehler",
        description: "Beim Herunterladen des Lebenslaufs ist ein Fehler aufgetreten: " + (error.message || 'Unbekannter Fehler'),
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const navItems = [
    { id: 'education', label: 'Bildung' },
    { id: 'experience', label: 'Erfahrung' },
    { id: 'projects', label: 'Projekte' },
    { id: 'skills', label: 'Fähigkeiten' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Side - Personal Info */}
            <div className="md:w-1/3 lg:w-1/4">
              <div className="sticky top-28">
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-200">
                      <img alt="Maxim Keibel" className="w-full h-full object-cover" src="/lovable-uploads/7c16e384-680f-43a0-8341-43bfb6b519e5.jpg" />
                    </div>
                    <h2 className="text-2xl font-bold">Maxim Keibel</h2>
                    <p className="text-gray-600">Software Developer / Schüler</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm text-gray-500 uppercase mb-2">Telefon</h3>
                      <p>+49 1734429624</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm text-gray-500 uppercase mb-2">E-Mail</h3>
                      <p className="break-all">maxim.keibel@icloud.com</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm text-gray-500 uppercase mb-2">Adresse</h3>
                      <p>Am Ring 3, Ismaning</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button 
                      className={`flex items-center justify-center w-full bg-black text-white py-3 rounded-lg transition-colors ${isDownloading ? 'opacity-75 cursor-wait' : 'hover:bg-gray-800'}`}
                      onClick={handleDownloadResume}
                      disabled={isDownloading || !resumeData}
                    >
                      <DownloadIcon size={18} className={`mr-2 ${isDownloading ? 'animate-bounce' : ''}`} />
                      {isDownloading ? 'Wird heruntergeladen...' : 'Lebenslauf herunterladen'}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Sprachen</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Deutsch</span>
                        <span>Muttersprache</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-black rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Englisch</span>
                        <span>Verhandlungsfähig</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-black rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Französisch</span>
                        <span>B1 Niveau</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-black rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Spanisch</span>
                        <span>Grundlagen</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-black rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - CV Content */}
            <div className="md:w-2/3 lg:w-3/4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Lebenslauf</h1>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                Ein Überblick über meine Ausbildung, Erfahrungen, Projekte und Fähigkeiten im Bereich der Softwareentwicklung und UI/UX-Design.
              </p>
              
              <div className="mb-10 border-b border-gray-200">
                <nav className="flex space-x-8 overflow-x-auto no-scrollbar">
                  {navItems.map(item => (
                    <button 
                      key={item.id} 
                      className={`py-3 border-b-2 font-medium transition-colors whitespace-nowrap ${
                        activeSection === item.id ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'
                      }`} 
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Education Section */}
              <div className={activeSection === 'education' ? 'block' : 'hidden'}>
                <h2 className="text-2xl font-bold mb-6">Schulbildung</h2>
                
                <div className="space-y-12">
                  <div className="relative pl-10 pb-10 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                    <div className="mb-2">
                      <span className="text-sm font-medium bg-gray-100 py-1 px-3 rounded-full">2016 - 2026</span>
                    </div>
                    <h3 className="text-xl font-bold">Gymnasium</h3>
                    <p className="text-gray-600 mb-4">ISGY (Gymnasium Ismaning)</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Teilnahme an Unternehmensgründung AG</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Französisch B1 Delf-Test Zertifikat (Oktober 2022)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-10 pb-10 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                    <div className="mb-2">
                      <span className="text-sm font-medium bg-gray-100 py-1 px-3 rounded-full">2012 - 2016</span>
                    </div>
                    <h3 className="text-xl font-bold">Grundschule</h3>
                    <p className="text-gray-600 mb-4">Kirchplatz Ismaning</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Teilnahme an KuK (Kunst und Kalmani Malkurs)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Teilnahme am Schlagzeug- und Rhythmik-Unterricht</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-6 mt-12">Teilnahmen</h2>
                
                <div className="space-y-12">
                  <div className="relative pl-10 pb-10 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                    <div className="mb-2">
                      <span className="text-sm font-medium bg-gray-100 py-1 px-3 rounded-full">2015 - 2022</span>
                    </div>
                    <h3 className="text-xl font-bold">Tennisclub (TC1)</h3>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Mitglied im Tennisclub (TC1) für 7 Jahre</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Mehrere Pokale bei Tennisturnieren</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Jugendleiterschaft (April 2022)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-10 pb-10 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                    <div className="mb-2">
                      <span className="text-sm font-medium bg-gray-100 py-1 px-3 rounded-full">2019</span>
                    </div>
                    <h3 className="text-xl font-bold">Informatik AG</h3>
                    <p className="mt-4">Teilnahme an einer Informatik AG</p>
                  </div>
                  
                  <div className="relative pl-10 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                    <div className="mb-2">
                      <span className="text-sm font-medium bg-gray-100 py-1 px-3 rounded-full">2016 - 2018</span>
                    </div>
                    <h3 className="text-xl font-bold">Schachclub Ismaning</h3>
                    <p className="mt-4">Schach Mitglied im Schachclub Ismaning für 2 Jahre</p>
                  </div>
                </div>
              </div>
              
              {/* Experience Section */}
              <div className={activeSection === 'experience' ? 'block' : 'hidden'}>
                <h2 className="text-2xl font-bold mb-6">Erfahrung & Interessen</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-xl mb-4">Webdesign</h3>
                    <p className="text-gray-700 mb-4">
                      Erfahrung mit verschiedenen Webdesign-Tools und -Technologien:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Shopify</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Page/ Framer</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>WebGuide</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Webspace</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>WordPress</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-xl mb-4">Medien/ KI</h3>
                    <p className="text-gray-700 mb-4">
                      Erfahrung in Medienbearbeitung und KI-Integration:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>Mediengestaltung (Lightroom/ Photoshop/ InDesign/ AE/ FCPX)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2"></span>
                        <span>KI (inkl. MCP Servern)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-xl mb-4">Fitness/ Sport</h3>
                    <p className="text-gray-700">
                      Aktives Interesse an Fitness und Sport, insbesondere Tennis mit mehrjähriger 
                      Vereinserfahrung und Turniererfolgen. Regelmäßiges Training und Fokus auf 
                      gesunden Lebensstil.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-xl mb-4">Kreatives Gestalten/ Erstellen</h3>
                    <p className="text-gray-700">
                      Leidenschaft für kreatives Design und die Erstellung digitaler Inhalte. 
                      Entwicklung eigener UI/UX-Konzepte für Apps und Webseiten mit Fokus auf 
                      Benutzerfreundlichkeit und ästhetisches Design.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Projects Section */}
              <div className={activeSection === 'projects' ? 'block' : 'hidden'}>
                <h2 className="text-2xl font-bold mb-6">Projekte</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-10 pb-10 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm font-medium bg-gray-100 py-1 px-3 rounded-full">2025</span>
                      <span className="text-sm font-medium">iOS/ macOS Apps</span>
                    </div>
                    <h3 className="text-xl font-bold">CopyClipCloud (macOS App)</h3>
                    <p className="text-gray-700 my-3">
                      Der smarte macOS-Clipboard-Manager, der alle kopierten Inhalte (PDF/ Bilder/ 
                      Text/ etc.) organisiert, kategorisiert und intuitiv in einer modernen Liste mit 
                      intelligenten Optionen in der Menubar darstellt.
                    </p>
                    <h3 className="text-xl font-bold mt-6">ToDoManager (macOS App)</h3>
                    <p className="text-gray-700 my-3">
                      Eine minimalistische Aufgaben- und Listenverwaltung, die dir hilft, Aufgaben schnell 
                      zu erstellen, übersichtlich zu organisieren und effizient zu verwalten.
                    </p>
                  </div>
                  
                  <div className="relative pl-10 pb-10 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm font-medium bg-gray-100 py-1 px-3 rounded-full">2024</span>
                      <span className="text-sm font-medium">iOS Apps</span>
                    </div>
                    <h3 className="text-xl font-bold">CopyChecker (iOS App)</h3>
                    <p className="text-gray-700 my-3">
                      Eine smarte Overlay-Controlle, die in Echtzeit anzeigt, ob und was du kopiert hast – 
                      ob Text, Bild, Code oder Dokument.
                    </p>
                    <h3 className="text-xl font-bold mt-6">NightManager (iOS App)</h3>
                    <p className="text-gray-700 my-3">
                      Ein smarter Einschlaf-Timer, der die Lautstärke deines iPhones nach individuell 
                      festgelegter Zeit automatisch reduziert oder stummschaltet, um gesunden Schlaf 
                      bei Musikbegleitung zu fördern und Akkukapazität zu schonen.
                    </p>
                  </div>
                  
                  <div className="relative pl-10 pb-10 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm font-medium bg-gray-100 py-1 px-3 rounded-full">2023</span>
                      <span className="text-sm font-medium">iOS App & Web App</span>
                    </div>
                    <h3 className="text-xl font-bold">NexServ (erste WebApp)</h3>
                    <p className="text-gray-700 my-3">
                      Website: <a href="https://nexserv.netlify.app/website" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://nexserv.netlify.app/website</a> / Ein studentisches Projekt: Finanzunternehmen aufgebaut.
                    </p>
                    <h3 className="text-xl font-bold mt-6">Zentro (iOS App)</h3>
                    <p className="text-gray-700 my-3">
                      Eine Navigations-App für Lieferanten, die in Echtzeit anzeigt, ob sie sich innerhalb des 
                      Lieferbereichs befinden, und bei Bedarf zurück zum Zentrum navigiert.
                    </p>
                    <h3 className="text-xl font-bold mt-6">AppTimer (iOS App)</h3>
                    <p className="text-gray-700 my-3">
                      Eine App, die die Restlaufzeit von Entwicklerzertifikaten anzeigt und hilft, Apps während 
                      der 7-tägigen Test-Phase zu kontrollieren.
                    </p>
                  </div>
                  
                  <div className="relative pl-10 border-l-2 border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm font-medium bg-gray-100 py-1 px-3 rounded-full">2022</span>
                      <span className="text-sm font-medium">Shopify Store</span>
                    </div>
                    <h3 className="text-xl font-bold">Dropout (Shopify Dropshipping Store)</h3>
                    <p className="text-gray-700 my-3">
                      Website: Geschlossen (Nicht mehr online)
                    </p>
                    <h3 className="text-xl font-bold mt-6">Erstes "Unternehmen" gegründet (KonutsExpress)</h3>
                    <p className="text-gray-700 my-3">
                      Donuts aus Istanbul
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Skills Section */}
              <div className={activeSection === 'skills' ? 'block' : 'hidden'}>
                <h2 className="text-2xl font-bold mb-6">Fähigkeiten</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-xl mb-4">Programmierung</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Swift UI</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>HTML/CSS</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>JavaScript</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>React</span>
                          <span>70%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Python</span>
                          <span>65%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-xl mb-4">Design</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>UI/UX Design</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Adobe Photoshop</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Adobe InDesign</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Sketch</span>
                          <span>70%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Figma</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-xl mb-4">Soft Skills</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Kreativität</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Problemlösung</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Teamarbeit</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Zeitmanagement</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-xl mb-4">Tools & Plattformen</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>XCode</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>VS Code</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Git/GitHub</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Shopify</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>WordPress</span>
                          <span>70%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-black rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resume;

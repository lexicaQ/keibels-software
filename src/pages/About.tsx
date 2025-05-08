
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mail, Phone, MapPin, User, Calendar, Briefcase, BookOpen, Heart } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Card } from '@/components/ui/card';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('profile');
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Use a more specific type for sectionRefs to avoid type errors
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 200;

        Object.entries(sectionRefs.current).forEach(([id, element]) => {
          if (!element) return;
          
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        });
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Call once to set initial active section

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isLoading]);

  // Function to scroll to section when timeline item is clicked
  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(id);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const timelineItems = [
    {
      id: 'profile',
      title: 'Profil',
      icon: <User size={20} className={activeSection === 'profile' ? 'text-white' : 'text-black'} />,
      year: '',
    },
    {
      id: 'education',
      title: 'Ausbildung',
      icon: <BookOpen size={20} className={activeSection === 'education' ? 'text-white' : 'text-black'} />,
      year: '2019 - Heute',
    },
    {
      id: 'experience',
      title: 'Erfahrung',
      icon: <Briefcase size={20} className={activeSection === 'experience' ? 'text-white' : 'text-black'} />,
      year: '2020 - Heute',
    },
    {
      id: 'values',
      title: 'Werte',
      icon: <Heart size={20} className={activeSection === 'values' ? 'text-white' : 'text-black'} />,
      year: '',
    },
    {
      id: 'passions',
      title: 'Leidenschaften',
      icon: <Calendar size={20} className={activeSection === 'passions' ? 'text-white' : 'text-black'} />,
      year: '',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left side - Fixed profile and contact info */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Profile Picture */}
                <div className="relative">
                  <div className="absolute inset-0 bg-black/10 blur-xl -z-10 rounded-full transform -translate-x-4 translate-y-4"></div>
                  <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-black shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                      alt="Maxim Keibel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Personal Information - Updated with correct contact information */}
                <Card className="p-6 bg-white shadow-lg border-none rounded-2xl animate-fade-in">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <User className="mr-2" size={20} />
                    Persönliches Profil
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail size={18} className="text-gray-600" />
                      <span className="text-gray-800">maxim.keibel@icloud.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={18} className="text-gray-600" />
                      <span className="text-gray-800">+49 173 4429624</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin size={18} className="text-gray-600" />
                      <span className="text-gray-800">Am Ring 3, Ismaning</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3">Sprachen</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Deutsch</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-black rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Englisch</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-black rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Französisch</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-black rounded-full" style={{ width: '50%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Spanisch</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-black rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Right side - Timeline and content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Timeline - Updated with click functionality */}
                <div className="md:col-span-1">
                  <div ref={timelineRef} className="md:sticky md:top-32 space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Mein Weg</h2>
                    
                    <div className="relative">
                      <div className="absolute left-4 top-0 h-full w-0.5 bg-black/10"></div>
                      
                      {timelineItems.map((item, index) => (
                        <div 
                          key={index} 
                          className="relative mb-8 cursor-pointer"
                          onClick={() => scrollToSection(item.id)}
                        >
                          <div className={`z-10 flex mb-1 ${activeSection === item.id ? 'transform translate-x-1' : ''}`}>
                            <div 
                              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 mr-3 transition-all duration-300 ${
                                activeSection === item.id ? 'border-black bg-black text-white' : 'border-black bg-white'
                              }`}
                            >
                              {item.icon}
                            </div>
                            <div className="flex items-center">
                              <p className={`font-bold ${activeSection === item.id ? 'text-black' : 'text-gray-600'}`}>
                                {item.title}
                              </p>
                              {item.year && <p className="text-xs text-gray-500 ml-2">{item.year}</p>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Content - Modified for better layout and alignment */}
                <div className="md:col-span-3 space-y-24">
                  {/* Profile Section */}
                  <section 
                    ref={(el) => {
                      sectionRefs.current['profile'] = el;
                    }}
                    id="profile" 
                    className="scroll-mt-32 text-left"
                  >
                    <h2 className="text-3xl font-bold mb-6">Über mich</h2>
                    <div className="prose max-w-none">
                      <p className="text-lg text-gray-700 mb-6">
                        Ich bin Maxim Keibel, ein leidenschaftlicher Software-Entwickler und UI/UX-Designer 
                        mit einem besonderen Fokus auf iOS- und macOS-Anwendungen. Meine Reise in der Welt 
                        der Technologie begann früh mit einem tiefen Interesse an Problemlösung und kreativem Gestalten.
                      </p>
                      
                      <p className="text-lg text-gray-700 mb-6">
                        Als Schüler am Gymnasium Ismaning verbinde ich meine akademische Ausbildung mit praktischen 
                        Projekten und Eigenentwicklungen. Ich bin davon überzeugt, dass die Kombination aus 
                        technischem Know-how und ästhetischem Design die Grundlage für herausragende digitale 
                        Produkte bildet.
                      </p>
                      
                      <p className="text-lg text-gray-700">
                        Über die Jahre habe ich verschiedene Projekte entwickelt – von Clipboard-Managern über 
                        Timer-Apps bis hin zu spezialisierten Navigations-Tools. Jedes Projekt ist von meiner 
                        Überzeugung geprägt, dass Software nicht nur funktional, sondern auch intuitiv und 
                        ästhetisch ansprechend sein sollte.
                      </p>
                    </div>
                  </section>
                  
                  {/* Education Section */}
                  <section 
                    ref={(el) => {
                      sectionRefs.current['education'] = el;
                    }}
                    id="education"
                    className="scroll-mt-32 text-left"
                  >
                    <h2 className="text-3xl font-bold mb-8">Ausbildung</h2>
                    
                    <div className="space-y-8">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold">Gymnasium Ismaning</h3>
                            <p className="text-gray-600">Allgemeines Abitur</p>
                          </div>
                          <div>
                            <span className="text-sm bg-black text-white px-3 py-1 rounded-full">2019 - Heute</span>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Fokus auf Naturwissenschaften und Informatik. Aktive Teilnahme an verschiedenen 
                          schulischen Projekten und Wettbewerben im Bereich der Softwareentwicklung.
                        </p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold">Selbststudium Programmierung</h3>
                            <p className="text-gray-600">Swift, SwiftUI, UIKit</p>
                          </div>
                          <div>
                            <span className="text-sm bg-black text-white px-3 py-1 rounded-full">2020 - Heute</span>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Intensive Selbstausbildung in modernen Programmiersprachen und Frameworks für die 
                          iOS- und macOS-Entwicklung. Erstellung einer Vielzahl von praktischen Projekten zur Vertiefung der Kenntnisse.
                        </p>
                      </div>
                    </div>
                  </section>
                  
                  {/* Experience Section */}
                  <section 
                    ref={(el) => {
                      sectionRefs.current['experience'] = el;
                    }}
                    id="experience"
                    className="scroll-mt-32 text-left"
                  >
                    <h2 className="text-3xl font-bold mb-8">Erfahrung</h2>
                    
                    <div className="space-y-8">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold">Freiberuflicher Entwickler</h3>
                            <p className="text-gray-600">iOS & macOS Anwendungen</p>
                          </div>
                          <div>
                            <span className="text-sm bg-black text-white px-3 py-1 rounded-full">2021 - Heute</span>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Entwicklung individueller Softwarelösungen für Privatkunden und kleine Unternehmen. 
                          Spezialisierung auf intuitive und ästhetisch ansprechende Benutzeroberflächen.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Swift</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">SwiftUI</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">UIKit</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Xcode</span>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold">Schulprojekt: Digitale Medien AG</h3>
                            <p className="text-gray-600">Leitung und Koordination</p>
                          </div>
                          <div>
                            <span className="text-sm bg-black text-white px-3 py-1 rounded-full">2020 - 2022</span>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Organisation und Leitung einer Schul-AG zum Thema Digitale Medien. Vermittlung von Grundlagen 
                          der App-Entwicklung und des UI/UX-Designs an interessierte Mitschüler.
                        </p>
                      </div>
                    </div>
                  </section>
                  
                  {/* Values Section - Improved layout with consistent containers */}
                  <section 
                    ref={(el) => {
                      sectionRefs.current['values'] = el;
                    }}
                    id="values"
                    className="scroll-mt-32 text-left"
                  >
                    <h2 className="text-3xl font-bold mb-8">Meine Werte</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-gray-200 h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 shadow-md">
                            <span className="text-white font-bold text-xl">1</span>
                          </div>
                          <h3 className="text-xl font-bold">Ehrlichkeit</h3>
                        </div>
                        <p className="text-gray-700 flex-grow">
                          Transparenz und Aufrichtigkeit bilden die Grundlage meiner Arbeit und meiner Beziehungen. 
                          Ich kommuniziere klar und direkt, um Vertrauen aufzubauen.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-gray-200 h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 shadow-md">
                            <span className="text-white font-bold text-xl">2</span>
                          </div>
                          <h3 className="text-xl font-bold">Hilfsbereitschaft</h3>
                        </div>
                        <p className="text-gray-700 flex-grow">
                          Ich glaube daran, mein Wissen zu teilen und anderen zu helfen, ihre Ziele zu erreichen. 
                          Gemeinsam können wir mehr erreichen als allein.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-gray-200 h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 shadow-md">
                            <span className="text-white font-bold text-xl">3</span>
                          </div>
                          <h3 className="text-xl font-bold">Einsatzbereitschaft</h3>
                        </div>
                        <p className="text-gray-700 flex-grow">
                          Wenn ich von einer Idee überzeugt bin, setze ich mich mit vollem Einsatz dafür ein. 
                          Ich scheue keine Herausforderungen und arbeite beharrlich.
                        </p>
                      </div>
                    </div>
                  </section>
                  
                  {/* Passions Section - Redesigned in modern black & white style */}
                  <section 
                    ref={(el) => {
                      sectionRefs.current['passions'] = el;
                    }}
                    id="passions"
                    className="scroll-mt-32 text-left"
                  >
                    <h2 className="text-3xl font-bold mb-8">Meine Leidenschaften</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group bg-white rounded-2xl p-8 border-2 border-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] h-full">
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mr-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Briefcase className="h-7 w-7 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">Software Development</h3>
                        </div>
                        <div className="space-y-4">
                          <p className="text-gray-800">
                            Meine Leidenschaft für die Entwicklung von Software geht über das reine Programmieren hinaus. 
                            Es ist die Kunst, komplexe Probleme in elegante Lösungen zu verwandeln.
                          </p>
                          <p className="text-gray-800">
                            Besonders fasziniert bin ich von der iOS- und macOS-Entwicklung, wo ich meine Ideen in 
                            intuitive, leistungsstarke Apps umsetzen kann.
                          </p>
                        </div>
                      </div>
                      
                      <div className="group bg-black text-white rounded-2xl p-8 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] h-full">
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <User className="h-7 w-7 text-black" />
                          </div>
                          <h3 className="text-2xl font-bold">UI/UX Design</h3>
                        </div>
                        <div className="space-y-4">
                          <p>
                            Das Design von Benutzeroberflächen ist für mich eine perfekte Kombination aus Kreativität und 
                            Funktionalität. Ich strebe nach Interfaces, die intuitiv und effizient sind.
                          </p>
                          <p>
                            Mein minimalistischer, schwarz-weißer Designansatz betont Klarheit und Fokus, während er 
                            gleichzeitig eine zeitlose Eleganz verkörpert.
                          </p>
                        </div>
                      </div>
                      
                      <div className="group bg-black text-white rounded-2xl p-8 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] h-full">
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <BookOpen className="h-7 w-7 text-black" />
                          </div>
                          <h3 className="text-2xl font-bold">Künstliche Intelligenz</h3>
                        </div>
                        <div className="space-y-4">
                          <p>
                            Die Entwicklung und Anwendung von KI-Technologien begeistert mich besonders im Kontext 
                            der Softwareentwicklung. Ich sehe enormes Potenzial in der Integration intelligenter 
                            Systeme.
                          </p>
                          <p>
                            Mein Ziel ist es, KI-Lösungen zu entwickeln, die nicht nur technisch beeindruckend sind, 
                            sondern auch echten Mehrwert für Nutzer schaffen.
                          </p>
                        </div>
                      </div>
                      
                      <div className="group bg-white rounded-2xl p-8 border-2 border-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] h-full">
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mr-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Heart className="h-7 w-7 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">Fitness & Sport</h3>
                        </div>
                        <div className="space-y-4">
                          <p className="text-gray-800">
                            Sport und körperliche Fitness sind wesentliche Teile meines Lebens. Als langjähriges Mitglied 
                            im Tennisclub habe ich wertvolle Lektionen in Disziplin und Ausdauer gelernt.
                          </p>
                          <p className="text-gray-800">
                            Die Balance zwischen geistiger und körperlicher Aktivität hilft mir, meine Produktivität 
                            und Kreativität zu steigern und neue Perspektiven zu gewinnen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
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

export default About;


import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  slogan: string;
  description: string;
  highlights: string[];
  platform: string;
  year: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "CopyClipCloud",
    slogan: "Dein smarter Clipboard-Manager – überall, organisiert, grenzenlos.",
    description: "CopyClipCloud ist die neue Generation der intelligenten Clipboard-Manager für macOS. Entwickelt für maximale Effizienz, Übersichtlichkeit und Stil, erfasst CopyClipCloud automatisch alle kopierten Inhalte – egal ob Texte, Bilder, Code oder Dokumente – und stellt sie in einer modern designten, hochgradig interaktiven Liste dar. Jedes Element wird mit flüssigen Animationen, einer intelligenten Kategorisierung und einer Vorschau für Bilder übersichtlich aufbereitet.",
    highlights: [
      "Automatisches Erfassen und Organisieren aller kopierten Inhalte",
      "Intelligente Kategorisierung von Texten, Bildern, Codes und mehr",
      "Direkte Bildvorschau innerhalb der Liste",
      "OCR-Funktion mit separatem Fenster für Textextraktion aus Bildern",
      "Echtzeit-Suchfunktion über alle Einträge",
      "Hochwertiges Schwarz-Weiß-Design mit flüssigen Animationen"
    ],
    platform: "macOS App",
    year: "2025"
  },
  {
    title: "AppTimer",
    slogan: "Lokale Kontrolle. Klare Übersicht. Sicher testen.",
    description: "AppTimer ist die ideale Lösung für Entwickler:innen und Tester:innen, die ihre lokal signierten Apps auf iOS-Geräten unter Echtzeitbedingungen testen. Die App zeigt auf einen Blick, wie lange das installierte Zertifikat noch gültig ist, und ermöglicht so eine präzise Planung und Verwaltung von Testzyklen. Im Zentrum steht der Zertifikat-Timer, der die verbleibende Zeit der aktuellen Testsignatur in Tagen, Stunden, Minuten und Sekunden anzeigt.",
    highlights: [
      "Echtzeit-Zertifikat-Timer mit Countdown auf Tagesbasis",
      "Sekundengenaue Anzeige der verbleibenden Gültigkeit",
      "Fortschrittsanzeige über den gesamten 7-Tage-Testzeitraum",
      "Frühwarnsystem bei Ablauf der App-Signatur",
      "Minimalistisches Dark-UI für maximale Konzentration"
    ],
    platform: "iOS App",
    year: "2023"
  },
  {
    title: "Zentro",
    slogan: "Dein Lieferfokus – punktgenau und auf den Meter genau.",
    description: "Zentro ist die smarte Navigations- und Zonen-App für Lieferdienste wie Lieferando – speziell entwickelt für Fahrer:innen, die in urbanen Gebieten wie München effizient und zonenbasiert arbeiten müssen. Die App erkennt in Echtzeit, ob sich der Fahrer innerhalb oder außerhalb des definierten Lieferzentrums befindet, und liefert sofortige visuelle Rückmeldung in einer klaren, modernen Kartenansicht.",
    highlights: [
      "Automatische Zonenüberwachung mit Live-Kartenansicht",
      "Klare Statusanzeige: Innerhalb oder Außerhalb des Lieferzentrums",
      "Visuelle Hervorhebung des Zentrumsbereichs",
      "Entfernungsmessung in Luftlinie und Fahrtstrecke",
      "Integration mit Apple Maps inkl. Verkehrsinformationen"
    ],
    platform: "iOS App",
    year: "2023"
  },
  {
    title: "NightManager",
    slogan: "Einschlafen mit Klang – aufwachen in Stille.",
    description: "NightManager ist der intelligente Timer für nächtliche Entspannung, sanftes Einschlafen mit Musik und kontrollierte Lautstärkeregelung auf deinem iPhone. Die App wurde speziell dafür entwickelt, abendliche Mediennutzung gesünder, smarter und akkuschonender zu gestalten. Sie reduziert automatisch die Lautstärke deines Geräts nach einer festgelegten Zeitspanne.",
    highlights: [
      "Smart-Timer zur automatischen Lautstärkeregelung über definierte Zeitintervalle",
      "Drei Modi: klassischer Timer, präziser Zeit-Eingabemodus, vordefinierte Presets",
      "Lautstärkeziel frei einstellbar von 0% bis 100%",
      "Benutzerdefinierte Presets für persönliche Einschlafgewohnheiten",
      "Minimalistisches, modernes Schwarz-Weiß-Design"
    ],
    platform: "iOS App",
    year: "2024"
  },
  {
    title: "ToDoManager",
    slogan: "Deine Aufgaben. Klar organisiert. Schnell erledigt.",
    description: "ToDoManager ist eine moderne, minimalistische Aufgabenverwaltungs-App, die dir hilft, deine To-Dos einfach, strukturiert und effizient zu organisieren. Mit einem durchgängigen Schwarz-Weiß-Design legt ToDoManager den Fokus voll auf Produktivität und Klarheit und bietet dir ein elegantes, ablenkungsfreies Arbeitsumfeld.",
    highlights: [
      "Schnelles Hinzufügen einfacher oder detaillierter Aufgaben",
      "Verwaltung mehrerer Aufgabenlisten",
      "Aufgaben filtern und sortieren nach verschiedenen Kriterien",
      "Klar strukturiertes, minimalistisches Schwarz-Weiß-Design",
      "Maximale Effizienz bei maximaler Übersicht"
    ],
    platform: "macOS App",
    year: "2025"
  },
  {
    title: "CopyChecker",
    slogan: "Immer wissen, was du kopiert hast.",
    description: "CopyChecker ist die smarte Overlay-App für iOS, die dir in Echtzeit anzeigt, was du zuletzt kopiert hast – ob Text, Bild, Link, Code oder Dokument. Wann immer ein neuer Kopiervorgang erkannt wird, blendet CopyChecker dezent und elegant eine Benachrichtigung ein, sodass du deine Zwischenablage sofort im Blick hast, ohne eine separate App öffnen zu müssen.",
    highlights: [
      "Live-Overlay bei neuen Kopiervorgängen",
      "Sofortige Erkennung von Texten, Bildern, Links, Codes und Dokumenten",
      "Dezent gestaltetes, modernes Overlay-Interface",
      "Unterstützung aller gängigen Kopierformate",
      "Optimiert für nahtloses Multitasking und effiziente Workflows"
    ],
    platform: "iOS App",
    year: "2024"
  }
];

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = selectedPlatform 
    ? projects.filter(project => project.platform === selectedPlatform) 
    : projects;

  const platforms = Array.from(new Set(projects.map(project => project.platform)));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meine Projekte</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Eine Sammlung meiner App-Entwicklungen für verschiedene Plattformen. Jedes Projekt wurde mit Fokus auf Benutzererfahrung, modernes Design und Funktionalität entwickelt.
            </p>
          </header>
          
          <div className="mb-8 flex flex-wrap gap-3">
            <button 
              className={`px-4 py-2 rounded-full border ${selectedPlatform === null 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
              onClick={() => setSelectedPlatform(null)}
            >
              Alle
            </button>
            
            {platforms.map((platform, index) => (
              <button 
                key={index} 
                className={`px-4 py-2 rounded-full border ${selectedPlatform === platform 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
                onClick={() => setSelectedPlatform(platform)}
              >
                {platform}
              </button>
            ))}
          </div>
          
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transition-all duration-500 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
              >
                <div className="p-8 md:p-10">
                  <div className="md:flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                      <p className="text-gray-600 italic">{project.slogan}</p>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0 space-x-4">
                      <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{project.platform}</span>
                      <span className="text-sm font-medium">{project.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8">
                    {project.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="flex items-center font-medium group">
                      Mehr Details
                      <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;

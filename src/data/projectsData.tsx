
import React from 'react';

// App content components
const CopyClipCloudContent = (isAnimating: boolean) => (
  <div className="bg-black h-full w-full text-white p-4">
    <div className="flex justify-between items-center mb-4">
      <div className="text-xl font-bold">CopyClipCloud</div>
      <div className="px-2 py-1 bg-gray-700 rounded-md text-xs">+ Neu</div>
    </div>
    
    <div className="space-y-3">
      {["Text Snippet", "Bilddatei", "URL Link", "Code"].map((item, i) => (
        <div 
          key={i}
          className={`p-3 bg-gray-800 rounded-lg transition-all duration-500 ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          <div className="flex justify-between items-center">
            <div className="font-medium">{item}</div>
            <div className="text-xs text-gray-400">Vor 2m</div>
          </div>
          <div className="text-sm text-gray-400 mt-1 truncate">
            {i === 0 ? 'Dies ist ein Beispiel für einen kopierten Text...' : 
             i === 1 ? 'image_03292.jpg' :
             i === 2 ? 'https://example.com/article/news' :
             'const handleCopy = () => { ... }'}
          </div>
        </div>
      ))}
    </div>
    
    {isAnimating && (
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="h-1 w-32 bg-white/30 rounded-full flex items-center">
          <div className="h-1 bg-white rounded-full w-1/3 animate-pulse"></div>
        </div>
      </div>
    )}
  </div>
);

const AppTimerContent = (isAnimating: boolean) => (
  <div className="bg-gradient-to-b from-gray-900 to-black h-full w-full flex flex-col items-center justify-center p-4 text-white">
    <div className="text-2xl font-bold mb-6">App Timer</div>
    
    <div className="w-48 h-48 rounded-full border-4 border-white relative flex items-center justify-center mb-6">
      <div className={`text-4xl font-bold transition-opacity duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
        {isAnimating ? '6:21:43' : ''}
      </div>
      
      {/* Animated timer circle */}
      <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle 
          cx="50" cy="50" r="46" 
          fill="none" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="8" 
        />
        <circle 
          cx="50" cy="50" r="46" 
          fill="none" 
          stroke="white" 
          strokeWidth="8"
          strokeDasharray="289"
          strokeLinecap="round"
          strokeDashoffset={isAnimating ? "72" : "289"}
          className="transition-all duration-1500 ease-in-out"
        />
      </svg>
    </div>
    
    <div className="text-sm text-gray-400 mb-2">Development Certificate</div>
    <div className={`text-center mb-6 transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-lg font-medium">Zeit bis Ablauf</div>
      <div className="text-sm text-gray-400">Zertifikat gültig bis 03.05.2025</div>
    </div>
    
    {isAnimating && (
      <button className="bg-white text-black py-2 px-6 rounded-full font-medium animate-pulse">
        Erneuern
      </button>
    )}
  </div>
);

const ZentroContent = (isAnimating: boolean) => (
  <div className="bg-gray-100 h-full w-full flex flex-col">
    <div className="bg-black text-white p-4 flex items-center justify-between">
      <div className="font-bold">Zentro</div>
      <div className="text-xs bg-green-500 px-2 py-1 rounded-full">Aktiv</div>
    </div>
    
    <div className="relative flex-grow">
      {/* Map background */}
      <div className="absolute inset-0 bg-gray-200 overflow-hidden">
        <div 
          className="w-full h-full relative bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=48.137154,11.576124&zoom=14&size=600x600&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:road|element:geometry|color:0xffffff&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8')]"
          style={{ filter: 'grayscale(100%) contrast(110%)' }}
        >
          {isAnimating && (
            <div className="absolute inset-0">
              {/* Zone circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-black bg-black/5"></div>
              
              {/* User location dot */}
              <div className="absolute top-[45%] left-[48%] w-4 h-4 bg-blue-500 rounded-full animate-pulse">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Zone boundary */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-dashed border-black animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Interface elements */}
      {isAnimating && (
        <>
          <div className="absolute top-4 left-0 right-0 flex justify-center">
            <div className="bg-white rounded-full shadow-lg px-4 py-2 text-sm font-medium">
              Du bist innerhalb der Zone
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="font-medium mb-2">Lieferzone Status</div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div>Innerhalb der Lieferzone</div>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                Entfernung zum Zentrum: 0.3 km
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);

const NightManagerContent = (isAnimating: boolean) => (
  <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black h-full w-full flex flex-col p-4 text-white">
    <div className="text-center mb-6">
      <div className="text-xl font-bold">Night Manager</div>
      <div className="text-sm text-gray-400">Entspannter Einschlafen</div>
    </div>
    
    <div className="flex-grow flex flex-col items-center justify-center">
      <div className={`w-48 h-48 rounded-full border-2 border-gray-700 bg-gray-800 flex items-center justify-center mb-8 transition-all duration-1000 ${isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <div className="text-center">
          <div className="text-4xl font-bold">{isAnimating ? '45:00' : '00:00'}</div>
          <div className="text-sm text-gray-400 mt-1">Minuten</div>
        </div>
      </div>
      
      {isAnimating && (
        <>
          <div className="w-full mb-8">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Lautstärke</span>
              <span>20%</span>
            </div>
            <div className="h-1 w-full bg-gray-700 rounded-full">
              <div className="h-1 bg-white rounded-full w-1/5 transition-all duration-1000"></div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
              <span className="transform -translate-x-1">◀◀</span>
            </button>
            <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
              ■
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
              <span className="transform translate-x-1">▶▶</span>
            </button>
          </div>
        </>
      )}
    </div>
    
    <div className={`mt-6 transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex justify-center space-x-3">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  </div>
);

const ToDoManagerContent = (isAnimating: boolean) => (
  <div className="bg-white h-full w-full flex flex-col">
    <div className="p-4 border-b border-gray-200">
      <div className="text-xl font-bold">ToDoManager</div>
    </div>
    
    <div className="flex-grow p-4 overflow-y-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="font-medium">Heute</div>
          <div className="text-xs text-gray-500">3 Aufgaben</div>
        </div>
        
        {["Design Review", "Code Refactoring", "Meeting vorbereiten"].map((task, i) => (
          <div 
            key={i}
            className={`flex items-center p-3 mb-2 border border-gray-100 rounded-lg bg-white shadow-sm transition-all duration-500 ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3" 
              checked={i === 1 && isAnimating} 
              readOnly
            />
            <span className={i === 1 && isAnimating ? 'line-through text-gray-400' : ''}>
              {task}
            </span>
          </div>
        ))}
      </div>
      
      {isAnimating && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div className="font-medium">Diese Woche</div>
            <div className="text-xs text-gray-500">2 Aufgaben</div>
          </div>
          
          {["Projektpräsentation", "Code Review"].map((task, i) => (
            <div 
              key={i}
              className="flex items-center p-3 mb-2 border border-gray-100 rounded-lg bg-white shadow-sm"
              style={{ animationDelay: `${(i + 3) * 150}ms` }}
            >
              <input 
                type="checkbox" 
                className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3" 
                readOnly
              />
              <span>{task}</span>
            </div>
          ))}
        </div>
      )}
    </div>
    
    {isAnimating && (
      <div className="p-4 border-t border-gray-200 flex justify-between">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <span className="text-xl">+</span>
        </button>
        <div className="flex space-x-1">
          <div className="w-8 h-1 bg-black rounded-full"></div>
          <div className="w-2 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    )}
  </div>
);

const CopyCheckerContent = (isAnimating: boolean) => (
  <div className="bg-gray-100 h-full w-full flex flex-col">
    <div className="flex-grow p-4 flex flex-col items-center justify-center">
      {isAnimating ? (
        <div className="w-full">
          <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-gray-200 mb-4 animate-fade-in">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-gray-500">Vor 5 Sekunden kopiert</div>
              <div className="bg-black text-white text-xs px-2 py-1 rounded-full">Text</div>
            </div>
            <div className="font-medium">
              https://example.com/important-article
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-gray-200 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-gray-500">Vor 2 Minuten kopiert</div>
              <div className="bg-black text-white text-xs px-2 py-1 rounded-full">Bild</div>
            </div>
            <div className="bg-gray-200 w-full h-24 rounded flex items-center justify-center">
              <span className="text-gray-500">Bild Vorschau</span>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-gray-500">Vor 15 Minuten kopiert</div>
              <div className="bg-black text-white text-xs px-2 py-1 rounded-full">Code</div>
            </div>
            <div className="font-mono text-sm bg-gray-50 p-2 rounded border border-gray-200">
              function copyToClipboard(text) &#123;<br />
              &nbsp;&nbsp;navigator.clipboard.writeText(text);<br />
              &#125;
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📋</span>
          </div>
          <div className="text-lg font-medium">CopyChecker</div>
          <p className="text-gray-500 text-sm mt-2">Warte auf neue kopierte Inhalte...</p>
        </div>
      )}
    </div>
    
    {isAnimating && (
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">CopyChecker</div>
          <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Aktiv</div>
        </div>
      </div>
    )}
  </div>
);

// Project data with all details
export const projectsData = [
  {
    id: "copyclipcloud",
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
    features: [
      {
        icon: "📋",
        title: "Smart Capture",
        description: "Erfasst automatisch alle kopierten Inhalte und kategorisiert sie nach Typ."
      },
      {
        icon: "🔍",
        title: "Echtzeit-Suche",
        description: "Durchsuche blitzschnell deine gesamte Kopierhistorie nach Schlüsselwörtern."
      },
      {
        icon: "🖼️",
        title: "Bildvorschau",
        description: "Zeigt Miniaturansichten kopierter Bilder direkt in der Liste an."
      },
      {
        icon: "📱",
        title: "Cloud-Sync",
        description: "Synchronisiere deine Zwischenablage über alle deine Geräte hinweg."
      },
      {
        icon: "🔒",
        title: "Datenschutz",
        description: "Verschlüsselung sensibler Daten und private Bereiche für vertrauliche Inhalte."
      },
      {
        icon: "⌨️",
        title: "Tastaturkürzel",
        description: "Schneller Zugriff auf alle Funktionen über anpassbare Tastenkombinationen."
      },
    ],
    platform: "macOS App",
    year: "2025",
    appContent: CopyClipCloudContent,
    backgroundColor: "#000000",
    textColor: "#000000",
    techStack: ["Swift", "SwiftUI", "Core Data", "CloudKit", "Vision API", "Combine"],
    releaseStatus: "In Entwicklung",
    userRating: 4.7,
    useCases: [
      "Effizientes Copy & Paste bei der Webentwicklung",
      "Organisation von Code-Snippets und Design-Patterns",
      "Recherche und Sammlung von Informationen",
      "Sicherer Austausch sensibler Daten"
    ],
    updates: [
      {
        version: "0.9.5 Beta",
        date: "April 2025",
        changes: [
          "Implementierung der Cloud-Synchronisierung zwischen Geräten",
          "Optimierung der Suchfunktion",
          "Leistungsverbesserungen und Fehlerbehebungen"
        ]
      },
      {
        version: "0.9.0 Beta",
        date: "März 2025",
        changes: [
          "Erste öffentliche Beta-Version",
          "Grundlegende Funktionalität implementiert",
          "Design und UI finalisiert"
        ]
      }
    ]
  },
  {
    id: "apptimer",
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
    features: [
      {
        icon: "⏱️",
        title: "Präziser Countdown",
        description: "Zeigt die verbleibende Gültigkeitsdauer bis auf die Sekunde genau an."
      },
      {
        icon: "📊",
        title: "Visuelle Fortschrittsanzeige",
        description: "Radiale Anzeige visualisiert den Status des 7-Tage-Testzeitraums."
      },
      {
        icon: "🔔",
        title: "Benachrichtigungen",
        description: "Rechtzeitige Warnungen vor dem Ablauf der App-Signatur."
      },
      {
        icon: "📱",
        title: "Widget-Support",
        description: "Home-Screen Widget für schnellen Zugriff auf den Timer-Status."
      }
    ],
    platform: "iOS App",
    year: "2023",
    appContent: AppTimerContent,
    backgroundColor: "#333333",
    textColor: "#000000",
    techStack: ["Swift", "UIKit", "UserNotifications", "WidgetKit"],
    releaseStatus: "Veröffentlicht",
    userRating: 4.5,
    useCases: [
      "Entwickler-Testsitzungen mit zeitkritischer Planung",
      "QA-Teams mit variierenden Testzyklen",
      "Beta-Tester mit mehreren Testversionen",
      "App-Demonstrationen für Kunden"
    ],
    updates: [
      {
        version: "1.2.0",
        date: "November 2023",
        changes: [
          "Widget-Support für iOS 16+",
          "Automatische Backup-Erinnerungen vor Ablauf",
          "Dark Mode Optimierungen"
        ]
      },
      {
        version: "1.0.0",
        date: "August 2023",
        changes: [
          "Initiale App-Store Release",
          "Unterstützung für mehrere Zertifikate",
          "Integration mit Apple Calendar"
        ]
      }
    ]
  },
  {
    id: "zentro",
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
    features: [
      {
        icon: "🗺️",
        title: "Live-Zonenüberwachung",
        description: "Erkennt automatisch Ihre Position relativ zum Lieferzentrum."
      },
      {
        icon: "📍",
        title: "Präzise Zonendefinition",
        description: "Exakte Festlegung des Liefergebiets mit anpassbarer Grenzziehung."
      },
      {
        icon: "📏",
        title: "Entfernungsmessung",
        description: "Berechnet Luftlinie und tatsächliche Fahrtstrecke zum Zielpunkt."
      },
      {
        icon: "🚦",
        title: "Verkehrsinformationen",
        description: "Integration von Echtzeit-Verkehrsdaten für optimale Routenplanung."
      },
      {
        icon: "🔋",
        title: "Energieeffizient",
        description: "Optimiert für minimalen Batterieverbrauch trotz kontinuierlicher Standortverfolgung."
      }
    ],
    platform: "iOS App",
    year: "2023",
    appContent: ZentroContent,
    backgroundColor: "#f5f5f7",
    textColor: "#000000",
    techStack: ["Swift", "MapKit", "CoreLocation", "GeoJSON", "UIKit", "SwiftUI"],
    releaseStatus: "Veröffentlicht",
    userRating: 4.8,
    useCases: [
      "Lieferfahrer mit festgelegten Lieferzonen",
      "Flottenmanager für mehrere Liefergebiete",
      "Restaurant-Teams zur Optimierung des Lieferbereichs",
      "Kurierdienste mit zentralen Abholpunkten"
    ],
    updates: [
      {
        version: "2.1.0",
        date: "Dezember 2023",
        changes: [
          "Multi-Zonen Support für komplexe Liefergebiete",
          "Neue Statistikfunktion für zurückgelegte Strecken",
          "Optimierte Batterielaufzeit"
        ]
      },
      {
        version: "1.0.0",
        date: "Mai 2023",
        changes: [
          "Initiale Version mit Grundfunktionen",
          "Einfache Zonenüberwachung",
          "Entfernungsberechnung"
        ]
      }
    ]
  },
  {
    id: "nightmanager",
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
    features: [
      {
        icon: "🎚️",
        title: "Graduelle Lautstärkereduktion",
        description: "Senkt die Lautstärke stufenlos über die eingestellte Zeitspanne."
      },
      {
        icon: "⏰",
        title: "Multiple Timer-Modi",
        description: "Klassischer Timer, präziser Zeit-Eingabemodus und Schnellwahlpresets."
      },
      {
        icon: "💾",
        title: "Benutzerdefinierte Presets",
        description: "Speichern Sie Ihre bevorzugten Einschlafeinstellungen für schnellen Zugriff."
      },
      {
        icon: "🌙",
        title: "Dark Mode Optimiert",
        description: "Augenschonendes Design für die Nutzung bei Nacht."
      },
      {
        icon: "🔋",
        title: "Akkuschonend",
        description: "Minimaler Energieverbrauch im Hintergrund für längere Batterielebensdauer."
      }
    ],
    platform: "iOS App",
    year: "2024",
    appContent: NightManagerContent,
    backgroundColor: "#222222",
    textColor: "#ffffff",
    techStack: ["Swift", "UIKit", "AVFoundation", "UserNotifications", "CoreHaptics"],
    releaseStatus: "Veröffentlicht",
    userRating: 4.6,
    useCases: [
      "Entspanntes Einschlafen mit Musik oder Podcasts",
      "Kontrollierte Mediennutzung für Kinder am Abend",
      "Meditation und Achtsamkeitsübungen",
      "Audiobuch-Hören vor dem Schlafengehen"
    ],
    updates: [
      {
        version: "1.1.0",
        date: "Februar 2024",
        changes: [
          "Integration mit Apple Music und Spotify",
          "Verbessertes Preset-Management",
          "Neue Einschlaf-Soundscapes"
        ]
      },
      {
        version: "1.0.0",
        date: "Januar 2024",
        changes: [
          "Initiale App Store Release",
          "Grundlegende Timer-Funktionalität",
          "Lautstärkesteuerung"
        ]
      }
    ]
  },
  {
    id: "todomanager",
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
    features: [
      {
        icon: "✓",
        title: "Intuitive Aufgabenerstellung",
        description: "Schnelles Hinzufügen von Aufgaben mit minimalen Klicks."
      },
      {
        icon: "📋",
        title: "Multiple Listen",
        description: "Organisieren Sie Aufgaben in verschiedenen Kategorien und Projekten."
      },
      {
        icon: "🏷️",
        title: "Tags und Prioritäten",
        description: "Markieren Sie Aufgaben mit Tags und weisen Sie Prioritätsstufen zu."
      },
      {
        icon: "⏱️",
        title: "Deadline-Management",
        description: "Setzen Sie Fälligkeitsdaten und Erinnerungen für wichtige Aufgaben."
      },
      {
        icon: "🔄",
        title: "Wiederholende Aufgaben",
        description: "Erstellen Sie Routinen mit sich automatisch wiederholenden To-Dos."
      },
      {
        icon: "📊",
        title: "Produktivitätsanalyse",
        description: "Verfolgen Sie Ihre Aufgabenabschlussquote mit übersichtlichen Statistiken."
      }
    ],
    platform: "macOS App",
    year: "2025",
    appContent: ToDoManagerContent,
    backgroundColor: "#ffffff",
    textColor: "#000000",
    techStack: ["Swift", "SwiftUI", "Core Data", "CloudKit", "Combine", "AppKit"],
    releaseStatus: "In Entwicklung",
    userRating: 4.9,
    useCases: [
      "Tägliches Task-Management für Unternehmer",
      "Projektmanagement für kleine Teams",
      "Akademische Aufgabenverwaltung für Studierende",
      "GTD-Methodik (Getting Things Done) Umsetzung"
    ],
    updates: [
      {
        version: "0.8.5 Beta",
        date: "Mai 2025",
        changes: [
          "Cloud-Synchronisierung zwischen Geräten",
          "Smart-Tags für automatische Klassifikation",
          "Natürliche Sprachverarbeitung für schnelle Eingabe"
        ]
      },
      {
        version: "0.7.0 Beta",
        date: "März 2025",
        changes: [
          "Erste Beta-Version für Tester",
          "Grundlegende Listen- und Aufgabenfunktionen",
          "Minimalistisches Design implementiert"
        ]
      }
    ]
  },
  {
    id: "copychecker",
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
    features: [
      {
        icon: "👁️",
        title: "Intelligentes Overlay",
        description: "Zeigt kopierte Inhalte als dezente Benachrichtigung ohne App-Wechsel."
      },
      {
        icon: "🔍",
        title: "Format-Erkennung",
        description: "Identifiziert und kategorisiert automatisch verschiedene Inhaltstypen."
      },
      {
        icon: "📋",
        title: "Historie",
        description: "Bewahrt eine chronologische Historie der letzten Kopiervorgänge."
      },
      {
        icon: "🔒",
        title: "Datenschutz-Fokus",
        description: "Sichere, lokale Verarbeitung ohne externe Datenweitergabe."
      },
      {
        icon: "⚡",
        title: "Performance-Optimiert",
        description: "Minimale System-Auslastung trotz kontinuierlicher Hintergrundaktivität."
      }
    ],
    platform: "iOS App",
    year: "2024",
    appContent: CopyCheckerContent,
    backgroundColor: "#f5f5f7",
    textColor: "#000000",
    techStack: ["Swift", "UIPasteboard", "NotificationCenter", "UIKit", "CoreImage"],
    releaseStatus: "Veröffentlicht",
    userRating: 4.4,
    useCases: [
      "Professionelles Recherchieren mit vielen Quellen",
      "Effizientes Kopieren von Informationen in Meetings",
      "Sicheres Übertragen von sensiblen Informationen",
      "Kontextbewusste Datenerfassung im Multitasking"
    ],
    updates: [
      {
        version: "1.2.0",
        date: "April 2024",
        changes: [
          "Verbesserte Format-Erkennung für spezielle Datentypen",
          "Historie-Funktion mit Suchfunktion",
          "Anpassbare Overlay-Position"
        ]
      },
      {
        version: "1.0.0",
        date: "Februar 2024",
        changes: [
          "Initiale App Store Release",
          "Grundlegende Überwachung der Zwischenablage",
          "Minimalistische Benachrichtigungen"
        ]
      }
    ]
  }
];

export default projectsData;

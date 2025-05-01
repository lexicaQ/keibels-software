import React, { useEffect, useState } from 'react';
import { Map, Globe, MapPin } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  slogan: string;
  description: string;
  platform: 'Web App' | 'iOS App' | 'macOS App';
  year: number;
  image: string;
  highlights: string[];
  link?: string;
  caseStudyPath?: string;
  videoUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  mockups?: {
    desktop?: string[];
    mobile?: string[];
  };
  testimonial?: {
    author: string;
    role: string;
    text: string;
    image: string;
  };
  problem?: string;
  solution?: string;
  techStack?: string[];
  appContent?: (isAnimating: boolean) => React.ReactNode;
}

const projectsData: Project[] = [
  {
    id: 'zentro',
    title: 'Zentro',
    slogan: 'Interaktive Kartendarstellung',
    description: 'Eine elegante Anwendung mit interaktiver Kartendarstellung als animierter Webseitenhintergrund. Die hochauflösende Karte ist nahtlos in das Schwarzweiß-Design integriert und bietet eine stilvolle visuelle Erfahrung.',
    platform: 'iOS App',
    year: 2023,
    image: '/images/projects/zentro/zentro-featured.png',
    highlights: [
      'Hochauflösende Kartendarstellung',
      'Nahtlose Animation',
      'Minimalistisches Schwarzweiß-Design'
    ],
    caseStudyPath: '/case-studies/zentro',
    backgroundColor: '#121212',
    textColor: '#ffffff',
    accentColor: '#555555',
    techStack: ['React', 'MapboxGL', 'Framer Motion'],
    appContent: (isAnimating: boolean) => {
      const [mapLoaded, setMapLoaded] = useState(false);
      
      useEffect(() => {
        if (isAnimating) {
          // Simulate map loading
          const timer = setTimeout(() => {
            setMapLoaded(true);
          }, 1000);
          
          return () => clearTimeout(timer);
        }
      }, [isAnimating]);
      
      return (
        <div className="relative w-full h-full bg-[#121212] text-white overflow-hidden">
          {/* Map Background */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-[#121212] bg-opacity-60 z-10"></div>
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
              {mapLoaded ? (
                <>
                  {/* Stylized Map Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0">
                      {/* Map Grid Lines */}
                      <div className="absolute inset-0 grid grid-cols-6 grid-rows-12">
                        {Array(72).fill(0).map((_, i) => (
                          <div key={i} className="border border-white/5"></div>
                        ))}
                      </div>
                      
                      {/* Animated Location Indicators */}
                      <div className="absolute left-1/4 top-1/3">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-white/10 rounded-full absolute -top-3 -left-3 animate-ping"></div>
                      </div>
                      
                      <div className="absolute right-1/3 bottom-1/4">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-white/10 rounded-full absolute -top-3 -left-3 animate-ping" style={{animationDelay: '1.5s'}}></div>
                      </div>
                      
                      {/* Map Routes */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[70%] h-[70%] border border-white/10 rounded-full relative">
                          <div className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full top-1/2"></div>
                          <div className="absolute w-px bg-gradient-to-b from-transparent via-white/20 to-transparent h-full left-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* UI Elements */}
                  <div className="relative z-20 w-full h-full flex flex-col">
                    <header className="p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <Map size={20} className="text-white/80 mr-2" />
                        <span className="font-medium">Zentro</span>
                      </div>
                      <div className="flex space-x-4">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10">
                          <Globe size={14} className="text-white/80" />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10">
                          <MapPin size={14} className="text-white/80" />
                        </div>
                      </div>
                    </header>
                    
                    <main className="flex-grow flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg max-w-[80%] text-center">
                        <h2 className="font-light text-xl mb-2">Entdecke neue Orte</h2>
                        <p className="text-sm text-white/70 mb-4">Interaktive Karten mit minimalistischem Design</p>
                        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">Starten</button>
                      </div>
                    </main>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  },
  {
    id: 'night-manager',
    title: 'Night Manager',
    slogan: 'Smarter Lautstärke-Timer',
    description: 'Eine intuitive App mit Timer-Funktionalität und automatischer Lautstärkeregelung. Der Night Manager reduziert automatisch die Lautstärke nach Ablauf eines Timers und spielt eine Benachrichtigung ab – perfekt für das Einschlafen mit Musik oder Podcasts.',
    platform: 'iOS App',
    year: 2023,
    image: '/images/projects/night-manager/night-manager-featured.png',
    highlights: [
      'Timer mit Start-/Stopp-Funktion',
      'Einstellbare Ziel-Lautstärke',
      'Automatische Lautstärkereduktion',
      'Sound-Benachrichtigung'
    ],
    caseStudyPath: '/case-studies/night-manager',
    backgroundColor: '#0f0f0f',
    textColor: '#ffffff',
    accentColor: '#3a86ff',
    techStack: ['React', 'Web Audio API', 'Framer Motion'],
    appContent: (isAnimating: boolean) => {
      const [timerActive, setTimerActive] = useState(false);
      const [timerComplete, setTimerComplete] = useState(false);
      const [volume, setVolume] = useState(80);
      const [minutes, setMinutes] = useState(5);
      const [seconds, setSeconds] = useState(0);
      
      useEffect(() => {
        let interval: number | null = null;
        if (isAnimating && timerActive) {
          interval = window.setInterval(() => {
            if (seconds > 0) {
              setSeconds(seconds - 1);
            } else if (minutes > 0) {
              setMinutes(minutes - 1);
              setSeconds(59);
            } else {
              setTimerActive(false);
              setTimerComplete(true);
              setVolume(20); // Reduce volume when timer completes
              
              // Play notification sound
              if (audioElement) {
                audioElement.play().catch(error => {
                  console.error("Playback failed:", error);
                });
              }
            }
          }, 1000);
        }
        
        return () => {
          if (interval) clearInterval(interval);
        };
      }, [isAnimating, timerActive, minutes, seconds]);
      
      const handleTimerToggle = () => {
        if (timerComplete) {
          setTimerComplete(false);
          setMinutes(5);
          setSeconds(0);
          setVolume(80);
        }
        setTimerActive(!timerActive);
      };
      
      const formatTime = (min: number, sec: number) => {
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
      };
      
      return (
        <div className="relative w-full h-full bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white overflow-hidden flex flex-col">
          {/* Status Bar */}
          <div className="p-4 flex justify-between items-center">
            <span className="text-sm font-medium">Night Manager</span>
            <div className="flex items-center space-x-2">
              <div className={`w-1.5 h-1.5 rounded-full ${timerActive ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-xs">{timerActive ? 'Timer aktiv' : 'Bereit'}</span>
            </div>
          </div>
          
          {/* Timer Display */}
          <div className="flex-grow flex flex-col items-center justify-center p-4">
            <div className={`text-5xl font-light mb-8 transition-all duration-500 ${timerComplete ? 'text-green-400' : ''}`}>
              {formatTime(minutes, seconds)}
            </div>
            
            {/* Volume Control */}
            <div className="w-full max-w-[80%] mb-10">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Lautstärke</span>
                <span>{volume}%</span>
              </div>
              <div className="h-1 bg-gray-700 rounded-full relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${volume}%` }}
                ></div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="absolute opacity-0 w-[80%] cursor-pointer"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, 10px)' }}
              />
            </div>
            
            {/* Control Buttons */}
            <button 
              onClick={handleTimerToggle}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                timerActive 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : timerComplete 
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {timerActive ? (
                <div className="w-4 h-4 bg-white rounded"></div>
              ) : timerComplete ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="white"/>
                </svg>
              )}
            </button>
            
            <div className="mt-8 text-sm text-gray-400">
              {timerActive 
                ? 'Tippen zum Stoppen' 
                : timerComplete 
                  ? 'Tippen zum Zurücksetzen'
                  : 'Tippen zum Starten'}
            </div>
          </div>
          
          {/* Timer Settings */}
          <div className="p-4 border-t border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-sm">Timer-Dauer</span>
              <div className="flex space-x-2">
                {[5, 10, 15, 30].map((value) => (
                  <button 
                    key={value}
                    disabled={timerActive}
                    onClick={() => { setMinutes(value); setSeconds(0); }}
                    className={`px-3 py-1 rounded-full text-xs ${
                      minutes === value && seconds === 0
                        ? 'bg-white/20' 
                        : 'bg-white/5 hover:bg-white/10'
                    } ${timerActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {value}m
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  },
  {
    id: 'todo-app',
    title: 'To-Do App',
    slogan: 'Elegante Aufgabenverwaltung',
    description: 'Eine elegante To-Do-App im macOS-Stil mit ansprechenden Animationen. Füge neue Aufgaben hinzu, hake sie ab und erlebe, wie sie mit sanften Übergängen durchgestrichen werden, bevor sie automatisch aus der Liste entfernt werden.',
    platform: 'macOS App',
    year: 2023,
    image: '/images/projects/todo-app/todo-app-featured.png',
    highlights: [
      'macOS-inspiriertes Design',
      'Elegante Animationen',
      'Durchstreicheffekt für erledigte Aufgaben',
      'Automatisches Entfernen erledigter Aufgaben'
    ],
    caseStudyPath: '/case-studies/todo-app',
    backgroundColor: '#f5f5f7',
    textColor: '#1d1d1f',
    accentColor: '#0071e3',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    appContent: (isAnimating: boolean) => {
      const [tasks, setTasks] = useState([
        { id: 1, text: 'Design-Meeting vorbereiten', completed: false },
        { id: 2, text: 'Produktpräsentation erstellen', completed: false },
        { id: 3, text: 'Wochenreport abschließen', completed: false }
      ]);
      const [newTask, setNewTask] = useState('');
      const [showSuccess, setShowSuccess] = useState(false);
      
      const handleAddTask = () => {
        if (newTask.trim()) {
          setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
          setNewTask('');
        }
      };
      
      const handleToggleTask = (id: number) => {
        setTasks(tasks.map(task => 
          task.id === id ? { ...task, completed: !task.completed } : task
        ));
        
        // Show success message
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
        
        // Remove completed task after delay
        setTimeout(() => {
          setTasks(tasks.filter(task => task.id !== id || !task.completed));
        }, 3000);
      };
      
      return (
        <div className="relative w-full h-full bg-[#f5f5f7] text-[#1d1d1f] overflow-hidden flex flex-col">
          {/* macOS Window Controls */}
          <div className="bg-[#e4e4e4] p-2 flex items-center border-b border-[#d1d1d1]">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c93f]"></div>
            </div>
            <div className="text-xs font-medium text-center flex-grow">To-Do App</div>
          </div>
          
          {/* App Content */}
          <div className="flex-grow p-4 overflow-auto">
            {/* Task Input */}
            <div className="flex mb-6">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Neue Aufgabe hinzufügen..."
                className="flex-grow p-2 border border-[#d1d1d1] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
              />
              <button 
                onClick={handleAddTask}
                disabled={!newTask.trim()}
                className="bg-[#0071e3] text-white px-4 py-2 rounded-r-lg hover:bg-[#0077ed] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
            
            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div 
                  key={task.id}
                  className={`p-3 border border-[#d1d1d1] rounded-lg bg-white shadow-sm transition-all duration-300 ${
                    task.completed ? 'opacity-50' : 'hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTask(task.id)}
                      className="w-5 h-5 rounded-full border-2 border-[#0071e3] text-[#0071e3] focus:ring-[#0071e3]"
                    />
                    <span 
                      className={`ml-3 transition-all duration-300 ${
                        task.completed 
                          ? 'line-through text-gray-400' 
                          : ''
                      }`}
                    >
                      {task.text}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Empty State */}
              {tasks.length === 0 && (
                <div className="text-center py-10 text-gray-400">
                  <div className="text-4xl mb-2">✓</div>
                  <p>Alle Aufgaben erledigt!</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Success Message */}
          <div 
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#34c759] text-white px-4 py-2 rounded-lg transition-all duration-300 ${
              showSuccess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Aufgabe erledigt! 🎉
          </div>
        </div>
      );
    }
  },
  {
    id: 'moodai',
    title: 'MoodAI',
    slogan: 'Stimmungsanalyse für bessere Kommunikation',
    description: 'MoodAI analysiert die Stimmung in Textnachrichten und E-Mails, um Missverständnisse zu vermeiden und die Kommunikation zu verbessern. Durch den Einsatz von künstlicher Intelligenz hilft die App, die emotionale Tonalität von Nachrichten zu erkennen und entsprechend zu reagieren.',
    platform: 'iOS App',
    year: 2023,
    image: '/images/projects/moodai/moodai-featured.png',
    highlights: [
      'Echtzeit-Stimmungsanalyse',
      'Integration in bestehende Messaging-Apps',
      'Personalisierte Feedback-Berichte'
    ],
    caseStudyPath: '/case-studies/moodai',
    mockups: {
      mobile: [
        '/images/projects/moodai/mockups/moodai-iphone-1.png',
        '/images/projects/moodai/mockups/moodai-iphone-2.png',
        '/images/projects/moodai/mockups/moodai-iphone-3.png'
      ]
    },
    testimonial: {
      author: 'Anna Müller',
      role: 'Kommunikationstrainerin',
      text: 'MoodAI hat meine Arbeit revolutioniert. Ich kann meinen Klienten jetzt noch besser helfen, ihre Kommunikation zu verbessern.',
      image: '/images/testimonials/anna-mueller.jpg'
    },
    problem: 'Missverständnisse in der digitalen Kommunikation führen oft zu Konflikten und Frustration.',
    solution: 'MoodAI analysiert die Stimmung in Texten und gibt Nutzern Feedback, um ihre Kommunikation zu verbessern.',
    techStack: ['Swift', 'Natural Language Processing', 'Core ML'],
    backgroundColor: '#f0f4ff',
    textColor: '#334155',
    accentColor: '#6366f1'
  },
  {
    id: 'smart-mirror',
    title: 'Smart Mirror',
    slogan: 'Der Spiegel, der mitdenkt',
    description: 'Ein intelligenter Spiegel, der aktuelle Nachrichten, Wetterinformationen und Kalendereinträge anzeigt. Der Smart Mirror ist ein interaktives Gerät, das sich nahtlos in den Alltag integriert und dem Benutzer hilft, organisiert und informiert zu bleiben.',
    platform: 'Web App',
    year: 2022,
    image: '/images/projects/smart-mirror/smart-mirror-featured.png',
    highlights: [
      'Personalisierbare Widgets',
      'Sprachsteuerung',
      'Integration mit Smart-Home-Geräten'
    ],
    caseStudyPath: '/case-studies/smart-mirror',
    mockups: {
      desktop: [
        '/images/projects/smart-mirror/mockups/smart-mirror-desktop-1.png',
        '/images/projects/smart-mirror/mockups/smart-mirror-desktop-2.png'
      ]
    },
    testimonial: {
      author: 'Max Schmidt',
      role: 'Softwareentwickler',
      text: 'Der Smart Mirror ist ein tolles Projekt, das zeigt, wie Technologie unseren Alltag bereichern kann.',
      image: '/images/testimonials/max-schmidt.jpg'
    },
    problem: 'Viele Menschen fühlen sich morgens überfordert von der Informationsflut.',
    solution: 'Der Smart Mirror bündelt alle wichtigen Informationen an einem Ort und hilft Nutzern, den Tag entspannt zu beginnen.',
    techStack: ['React', 'Node.js', 'Raspberry Pi'],
    backgroundColor: '#e5e7eb',
    textColor: '#1f2937',
    accentColor: '#4b5563'
  },
  {
    id: 'health-tracker',
    title: 'Health Tracker',
    slogan: 'Deine Gesundheit immer im Blick',
    description: 'Eine umfassende App zur Verfolgung von Gesundheitsdaten wie Schlaf, Ernährung und Bewegung. Der Health Tracker hilft Nutzern, ihre Gewohnheiten zu verstehen und gesündere Entscheidungen zu treffen. Die App bietet personalisierte Empfehlungen und motiviert zu einem aktiven Lebensstil.',
    platform: 'iOS App',
    year: 2023,
    image: '/images/projects/health-tracker/health-tracker-featured.png',
    highlights: [
      'Automatische Datenerfassung',
      'Personalisierte Empfehlungen',
      'Integration mit Wearables'
    ],
    caseStudyPath: '/case-studies/health-tracker',
    mockups: {
      mobile: [
        '/images/projects/health-tracker/mockups/health-tracker-iphone-1.png',
        '/images/projects/health-tracker/mockups/health-tracker-iphone-2.png',
        '/images/projects/health-tracker/mockups/health-tracker-iphone-3.png'
      ]
    },
    testimonial: {
      author: 'Lena Wagner',
      role: 'Ernährungsberaterin',
      text: 'Der Health Tracker ist ein wertvolles Werkzeug für alle, die ihre Gesundheit verbessern möchten.',
      image: '/images/testimonials/lena-wagner.jpg'
    },
    problem: 'Viele Menschen haben Schwierigkeiten, ihre Gesundheitsdaten im Blick zu behalten.',
    solution: 'Der Health Tracker erfasst und analysiert Gesundheitsdaten automatisch und gibt personalisierte Empfehlungen.',
    techStack: ['Swift', 'Core Data', 'HealthKit'],
    backgroundColor: '#f0fdfa',
    textColor: '#0e7490',
    accentColor: '#14b8a6'
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    slogan: 'Organisiere dein Leben',
    description: 'Eine einfache und intuitive App zur Verwaltung von Aufgaben und Projekten. Der Task Manager hilft Nutzern, den Überblick zu behalten und ihre Produktivität zu steigern. Die App bietet Funktionen wie Erinnerungen, Prioritäten und Team-Collaboration.',
    platform: 'Web App',
    year: 2022,
    image: '/images/projects/task-manager/task-manager-featured.png',
    highlights: [
      'Drag-and-Drop-Interface',
      'Team-Collaboration',
      'Integration mit Kalender-Apps'
    ],
    caseStudyPath: '/case-studies/task-manager',
    mockups: {
      desktop: [
        '/images/projects/task-manager/mockups/task-manager-desktop-1.png',
        '/images/projects/task-manager/mockups/task-manager-desktop-2.png'
      ]
    },
    testimonial: {
      author: 'David Klein',
      role: 'Projektmanager',
      text: 'Der Task Manager hat unsere Teamarbeit deutlich verbessert.',
      image: '/images/testimonials/david-klein.jpg'
    },
    problem: 'Viele Menschen fühlen sich von ihren Aufgaben überfordert und haben Schwierigkeiten, den Überblick zu behalten.',
    solution: 'Der Task Manager bietet eine einfache und intuitive Möglichkeit, Aufgaben zu verwalten und die Produktivität zu steigern.',
    techStack: ['React', 'Redux', 'Firebase'],
    backgroundColor: '#fef08a',
    textColor: '#a16207',
    accentColor: '#facc15'
  },
  {
    id: 'eco-tracker',
    title: 'Eco Tracker',
    slogan: 'Verfolge deinen ökologischen Fußabdruck',
    description: 'Eine App, die Nutzern hilft, ihren ökologischen Fußabdruck zu reduzieren. Der Eco Tracker analysiert das Verhalten der Nutzer und gibt personalisierte Tipps zur Verbesserung der Nachhaltigkeit. Die App motiviert zu einem umweltbewussten Lebensstil und fördert das Bewusstsein für ökologische Themen.',
    platform: 'iOS App',
    year: 2023,
    image: '/images/projects/eco-tracker/eco-tracker-featured.png',
    highlights: [
      'Automatische Berechnung des CO2-Fußabdrucks',
      'Personalisierte Tipps zur Nachhaltigkeit',
      'Community-Funktionen'
    ],
    caseStudyPath: '/case-studies/eco-tracker',
    mockups: {
      mobile: [
        '/images/projects/eco-tracker/mockups/eco-tracker-iphone-1.png',
        '/images/projects/eco-tracker/mockups/eco-tracker-iphone-2.png',
        '/images/projects/eco-tracker/mockups/eco-tracker-iphone-3.png'
      ]
    },
    testimonial: {
      author: 'Sophie Weber',
      role: 'Umweltaktivistin',
      text: 'Der Eco Tracker ist ein wertvolles Werkzeug für alle, die einen Beitrag zum Umweltschutz leisten möchten.',
      image: '/images/testimonials/sophie-weber.jpg'
    },
    problem: 'Viele Menschen sind sich ihres ökologischen Fußabdrucks nicht bewusst und wissen nicht, wie sie ihn reduzieren können.',
    solution: 'Der Eco Tracker analysiert das Verhalten der Nutzer und gibt personalisierte Tipps zur Verbesserung der Nachhaltigkeit.',
    techStack: ['Swift', 'Core Location', 'Realm'],
    backgroundColor: '#ecfdf5',
    textColor: '#065f46',
    accentColor: '#10b981'
  }
];

export default projectsData;

let audioElement: HTMLAudioElement | null = null;

export const useAudio = (isAnimating: boolean) => {
  useEffect(() => {
    if (isAnimating) {
      audioElement = document.createElement('audio');
      audioElement.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAkJCQkJCQkJCQkJCQkJCQwMDAwMDAwMDAwMDAwMDAwMDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4P//////////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQCkAAAAAAAAAGwhYzJKgAAAAAAAAAAAAAAAAAAAP/jOMAAAAAAAAAAAABJbmZvAAAADwAAAAMAAAGwAJCQkJCQkJCQkJCQkJCQkMDAwMDAwMDAwMDAwMDAwMDA4ODg4ODg4ODg4ODg4ODg4OD//////////////////////////wAAAABMYXZjNTguMTMAAAAAAAAAAAAAACQCkAAAAAAAAAGwhYzJKgAAAAAAAAAAAAAAAAAA';
    }

    const playAudio = () => {
      if (audioElement) {
        audioElement.play().catch(error => {
          console.error("Playback failed:", error);
        });
      }
    };

    const pauseAudio = () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };

    if (isAnimating && audioElement) {
      playAudio();
    } else {
      pauseAudio();
    }

    return () => {
      pauseAudio();
      audioElement = null;
    };
  }, [isAnimating]);
};

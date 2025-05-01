
import React, { useEffect } from 'react';

// Modern app content components with glassmorphism style
const CopyClipCloudContent = (isAnimating: boolean) => {
  // Set up clipboard monitoring for macOS simulator
  useEffect(() => {
    if (isAnimating) {
      const handleCopy = (e: ClipboardEvent) => {
        // We'll simulate the copy event visual effect
        const copiedText = document.getSelection()?.toString() || "";
        if (copiedText && copiedText.length > 0) {
          const clipboardElement = document.getElementById('clipboard-items');
          if (clipboardElement) {
            const newItem = document.createElement('div');
            newItem.className = 'p-3 bg-black/80 backdrop-blur-md rounded-lg mb-3 animate-fade-in';
            
            const itemContent = document.createElement('div');
            itemContent.className = 'flex justify-between items-center';
            
            const titleDiv = document.createElement('div');
            titleDiv.className = 'font-medium text-white';
            titleDiv.textContent = 'Text';
            
            const timeDiv = document.createElement('div');
            timeDiv.className = 'text-xs text-gray-400';
            timeDiv.textContent = 'Gerade eben';
            
            const previewDiv = document.createElement('div');
            previewDiv.className = 'text-sm text-gray-400 mt-1 truncate';
            previewDiv.textContent = copiedText.substring(0, 50) + (copiedText.length > 50 ? '...' : '');
            
            itemContent.appendChild(titleDiv);
            itemContent.appendChild(timeDiv);
            newItem.appendChild(itemContent);
            newItem.appendChild(previewDiv);
            
            clipboardElement.insertBefore(newItem, clipboardElement.firstChild);
            
            // Remove the oldest item if we have more than 4
            if (clipboardElement.children.length > 4) {
              clipboardElement.removeChild(clipboardElement.lastChild as Node);
            }
          }
        }
      };
      
      document.addEventListener('copy', handleCopy);
      return () => document.removeEventListener('copy', handleCopy);
    }
  }, [isAnimating]);

  return (
    <div className="bg-gray-900 h-full w-full text-white p-4 flex flex-col">
      {/* macOS-style menu bar */}
      <div className="flex justify-between items-center py-2 px-3 bg-black/80 backdrop-blur-md mb-4 rounded-lg">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <div className="ml-4 font-medium">CopyClipCloud</div>
        </div>
        <div className="flex items-center text-xs text-gray-400">
          <span>21:42</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-xl font-semibold">Zwischenablage</div>
        <p className="text-xs text-gray-400">Alle kopierten Inhalte werden hier gespeichert</p>
      </div>
      
      <div id="clipboard-items" className="space-y-3 flex-grow overflow-y-auto">
        {["Text", "Bild", "URL Link", "Code"].map((item, i) => (
          <div 
            key={i}
            className={`p-3 bg-black/80 backdrop-blur-md rounded-lg transition-all duration-500 ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="flex justify-between items-center">
              <div className="font-medium">{item}</div>
              <div className="text-xs text-gray-400">Vor {i+1}m</div>
            </div>
            <div className="text-sm text-gray-400 mt-1 truncate">
              {i === 0 ? 'Dies ist ein Beispiel für einen kopierten Text...' : 
               i === 1 ? 'design_thumbnail.png' :
               i === 2 ? 'https://beispiel.de/artikel/news' :
               'function handleCopy() { /* ... */ }'}
            </div>
          </div>
        ))}
      </div>
      
      {isAnimating && (
        <div className="mt-4 py-3 px-4 bg-black/50 backdrop-blur-md rounded-lg text-xs text-gray-400 flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <span>Kopieren Sie etwas auf dieser Seite, um es hier erscheinen zu lassen</span>
        </div>
      )}
    </div>
  );
};

const AppTimerContent = (isAnimating: boolean) => {
  useEffect(() => {
    let audioElement: HTMLAudioElement | null = null;
    
    if (isAnimating) {
      audioElement = document.createElement('audio');
      audioElement.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAkJCQkJCQkJCQkJCQkJCQwMDAwMDAwMDAwMDAwMDAwMDg4ODg4ODg4ODg4ODg4ODg4P//////////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQCkAAAAAAAAAGwhYzJKgAAAAAAAAAAAAAAAAAAAP/jOMAAAAAAAAAAAABJbmZvAAAADwAAAAMAAAGwAJCQkJCQkJCQkJCQkJCQkMDAwMDAwMDAwMDAwMDAwMDA4ODg4ODg4ODg4ODg4ODg4OD//////////////////////////wAAAABMYXZjNTguMTMAAAAAAAAAAAAAACQCkAAAAAAAAAGwhYzJKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/jgMQAE7V7IpMPGlCJZ+OVpkxZHAQEBAQEBAQEzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzP/jUMRQAkodHVkMMSxIpaOSVgYk8zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/40DEXwJJoR1JDBCsCSejrSGGGQzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzM/+NAxGICSVkdQAwwrAkjo6MBhhkzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/40DEaAJJQR0oDDDICSKjoyGGFPM8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//jQMR1AkktHSUMMKwJKCOkoYYZg88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888/+NAxHoCSXkdJQwwzAkpo6YBhhkzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/40DEggJKIR0lDDDMCSQjpSGGFPM8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888';
      audioElement.load();
    }
    
    return () => {
      if (audioElement) {
        audioElement.remove();
      }
    };
  }, [isAnimating]);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black h-full w-full flex flex-col items-center justify-center p-4 text-white">
      <div className="text-center mb-8">
        <div className="text-2xl font-bold">App Timer</div>
        <div className="text-sm text-gray-400">Entwicklerzertifikat</div>
      </div>
      
      <div className={`w-52 h-52 rounded-full border-2 border-white/30 bg-black/50 backdrop-blur-lg flex items-center justify-center relative transition-all duration-1000 ${isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        {/* Timer progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle 
            cx="50" cy="50" r="48" 
            fill="none" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="2" 
          />
          <circle 
            cx="50" cy="50" r="48" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            strokeDasharray="301.6"
            strokeDashoffset={isAnimating ? "72" : "301.6"}
            strokeLinecap="round"
            className="transition-all duration-1500 ease-in-out"
          />
        </svg>
        
        <div className="text-center z-10">
          <div className={`text-4xl font-bold transition-all duration-1000 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            {isAnimating ? '6:21:43' : '00:00'}
          </div>
          <div className="text-sm text-gray-400 mt-1">verbleibend</div>
        </div>
      </div>
      
      <div className={`mt-10 max-w-xs text-center transition-all duration-1000 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-lg font-medium mb-1">Entwicklerzertifikat</div>
        <div className="text-sm text-gray-400 mb-6">Zertifikat gültig bis 03.05.2025</div>
        
        <div className="flex flex-col items-center">
          <div className="w-full h-1 bg-gray-700 rounded-full mb-2 overflow-hidden">
            <div className="h-full bg-white rounded-full w-3/4" style={{ transition: 'width 1.5s ease' }}></div>
          </div>
          <div className="flex justify-between w-full text-xs text-gray-400">
            <span>Start</span>
            <span>75% abgelaufen</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ZentroContent = (isAnimating: boolean) => (
  <div className="bg-gray-100 h-full w-full flex flex-col">
    <div className="bg-black text-white p-4 flex items-center justify-between">
      <div className="font-bold">Zentro</div>
      <div className="flex items-center">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
        <span className="text-xs">Aktiv</span>
      </div>
    </div>
    
    <div className="relative flex-grow">
      {/* Map background with glassmorphism UI */}
      <div className="absolute inset-0 bg-gray-200 overflow-hidden">
        <div 
          className="w-full h-full relative bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=48.137154,11.576124&zoom=14&size=600x600&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:road|element:geometry|color:0xffffff&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8')]"
          style={{ filter: 'grayscale(100%) contrast(110%)' }}
        >
          {isAnimating && (
            <div className="absolute inset-0">
              {/* Zone with glassmorphism style */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/50 bg-black/10 backdrop-blur-sm"></div>
              
              {/* User location dot with pulse effect */}
              <div className="absolute top-[45%] left-[48%] w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Zone boundary with modern look */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/40 animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Modern glass UI elements */}
      {isAnimating && (
        <>
          <div className="absolute top-4 left-0 right-0 flex justify-center">
            <div className="bg-black/70 backdrop-blur-md text-white rounded-full shadow-lg px-4 py-2 text-sm font-medium border border-white/10">
              Du bist innerhalb der Zone
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/70 backdrop-blur-md rounded-lg shadow-lg p-4 text-white border border-white/10">
              <div className="font-medium mb-3">Lieferzone Status</div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div>Innerhalb der Lieferzone</div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300">Entfernung zum Zentrum:</span>
                <span className="font-medium">0.3 km</span>
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
      <div className="text-xs text-gray-400">Entspannter Einschlafen</div>
    </div>
    
    <div className="flex-grow flex flex-col items-center justify-center">
      <div className={`w-48 h-48 rounded-full border border-white/30 bg-black/60 backdrop-blur-lg flex items-center justify-center mb-8 transition-all duration-1000 ${isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <div className="text-center">
          <div className="text-4xl font-bold">{isAnimating ? '45:00' : '00:00'}</div>
          <div className="text-xs text-gray-400 mt-1">Minuten</div>
        </div>
      </div>
      
      {isAnimating && (
        <>
          <div className="w-full mb-8 px-4">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Lautstärke</span>
              <span>20%</span>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-1 bg-white rounded-full w-1/5 transition-all duration-1000"></div>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <button className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 20L9 12L19 4V20Z" fill="white"/>
              </svg>
            </button>
            <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-white/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="12" height="12" rx="1" fill="black"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 4L15 12L5 20V4Z" fill="white"/>
              </svg>
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
  <div className="bg-gradient-to-b from-gray-50 to-white h-full w-full flex flex-col">
    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
      <div className="text-xl font-bold">ToDoManager</div>
      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V12M12 12V18M12 12H18M12 12H6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
    
    <div className="flex-grow p-4 overflow-y-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <div className="font-medium">Heute</div>
          <div className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">3 Aufgaben</div>
        </div>
        
        {["Design Review", "Code Refactoring", "Meeting vorbereiten"].map((task, i) => (
          <div 
            key={i}
            className={`flex items-center p-3 mb-2 border border-gray-100 rounded-lg bg-white shadow-sm transition-all duration-500 ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className={`w-5 h-5 rounded-full ${i === 1 && isAnimating ? 'bg-black' : 'border-2 border-gray-300'} mr-3 flex items-center justify-center`}>
              {i === 1 && isAnimating && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className={i === 1 && isAnimating ? 'line-through text-gray-400' : ''}>
              {task}
            </span>
          </div>
        ))}
      </div>
      
      {isAnimating && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <div className="font-medium">Diese Woche</div>
            <div className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">2 Aufgaben</div>
          </div>
          
          {["Projektpräsentation", "Code Review"].map((task, i) => (
            <div 
              key={i}
              className="flex items-center p-3 mb-2 border border-gray-100 rounded-lg bg-white shadow-sm"
              style={{ animationDelay: `${(i + 3) * 150}ms` }}
            >
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3"></div>
              <span>{task}</span>
            </div>
          ))}
        </div>
      )}
    </div>
    
    {isAnimating && (
      <div className="p-4 border-t border-gray-200 flex justify-center">
        <div className="flex space-x-2">
          <div className="w-8 h-1 bg-black rounded-full"></div>
          <div className="w-2 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    )}
  </div>
);

const CopyCheckerContent = (isAnimating: boolean) => {
  // Set up clipboard monitoring for macOS simulator
  useEffect(() => {
    if (isAnimating) {
      const handleCopy = (e: ClipboardEvent) => {
        // We'll simulate the copy event visual effect
        const copiedText = document.getSelection()?.toString() || "";
        if (copiedText && copiedText.length > 0) {
          const clipboardElement = document.getElementById('clipboard-items-checker');
          if (clipboardElement) {
            const newItem = document.createElement('div');
            newItem.className = 'bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-gray-200 mb-4 animate-fade-in';
            
            const headerDiv = document.createElement('div');
            headerDiv.className = 'flex justify-between items-center mb-2';
            
            const timeDiv = document.createElement('div');
            timeDiv.className = 'text-xs text-gray-500';
            timeDiv.textContent = 'Gerade kopiert';
            
            const typeDiv = document.createElement('div');
            typeDiv.className = 'bg-black text-white text-xs px-2 py-1 rounded-full';
            typeDiv.textContent = 'Text';
            
            headerDiv.appendChild(timeDiv);
            headerDiv.appendChild(typeDiv);
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'font-medium';
            contentDiv.textContent = copiedText.substring(0, 50) + (copiedText.length > 50 ? '...' : '');
            
            newItem.appendChild(headerDiv);
            newItem.appendChild(contentDiv);
            
            clipboardElement.insertBefore(newItem, clipboardElement.firstChild);
            
            // Remove the oldest item if we have more than 3
            if (clipboardElement.children.length > 3) {
              clipboardElement.removeChild(clipboardElement.lastChild as Node);
            }
          }
        }
      };
      
      document.addEventListener('copy', handleCopy);
      return () => document.removeEventListener('copy', handleCopy);
    }
  }, [isAnimating]);

  return (
    <div className="bg-gray-100 h-full w-full flex flex-col">
      <div className="bg-black p-3 text-white flex justify-between items-center">
        <div className="font-medium">CopyChecker</div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <span className="text-xs">Aktiv</span>
        </div>
      </div>
      
      <div id="clipboard-items-checker" className="flex-grow p-4 flex flex-col">
        {isAnimating ? (
          <>
            <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-gray-200 mb-4 animate-fade-in">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs text-gray-500">Vor 5 Sekunden</div>
                <div className="bg-black text-white text-xs px-2 py-1 rounded-full">Link</div>
              </div>
              <div className="font-medium">
                https://beispiel.de/artikel/news
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-gray-200 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs text-gray-500">Vor 2 Minuten</div>
                <div className="bg-black text-white text-xs px-2 py-1 rounded-full">Bild</div>
              </div>
              <div className="bg-gray-200/80 backdrop-blur-sm w-full h-24 rounded flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#9CA3AF" strokeWidth="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="#9CA3AF"/>
                  <path d="M6 16L8 13L10 14L14 10L18 16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs text-gray-500">Vor 15 Minuten</div>
                <div className="bg-black text-white text-xs px-2 py-1 rounded-full">Code</div>
              </div>
              <div className="font-mono text-sm bg-gray-50/80 backdrop-blur-sm p-2 rounded border border-gray-200">
                function copyToClipboard(text) &#123;<br />
                &nbsp;&nbsp;navigator.clipboard.writeText(text);<br />
                &#125;
              </div>
            </div>
            
            <div className="mt-auto py-3 px-4 bg-black/50 text-white backdrop-blur-md rounded-lg text-xs flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Kopieren Sie etwas auf dieser Seite, um es hier erscheinen zu lassen</span>
            </div>
          </>
        ) : (
          <div className="text-center p-8 h-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200/50 backdrop-blur-sm flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="2" width="8" height="4" rx="1" stroke="#6B7280" strokeWidth="2"/>
                  <rect x="6" y="4" width="12" height="16" rx="2" stroke="#6B7280" strokeWidth="2"/>
                  <path d="M10 10H14" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 14H14" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-lg font-medium">CopyChecker</div>
              <p className="text-gray-500 text-sm mt-2">Warte auf neue kopierte Inhalte...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Create a special bucket timer component for the "Eimer" project
const EimerProject = (isAnimating: boolean) => {
  const [timerValue, setTimerValue] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let audioElement: HTMLAudioElement | null = null;
    
    if (isAnimating) {
      audioElement = document.createElement('audio');
      audioElement.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAkJCQkJCQkJCQkJCQkJCQwMDAwMDAwMDAwMDAwMDAwMDg4ODg4ODg4ODg4ODg4ODg4P//////////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQCkAAAAAAAAAGwhYzJKgAAAAAAAAAAAAAAAAAAAP/jOMAAAAAAAAAAAABJbmZvAAAADwAAAAMAAAGwAJCQkJCQkJCQkJCQkJCQkMDAwMDAwMDAwMDAwMDAwMDA4ODg4ODg4ODg4ODg4ODg4OD//////////////////////////wAAAABMYXZjNTguMTMAAAAAAAAAAAAAACQCkAAAAAAAAAGwhYzJKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/jgMQAE7V7IpMPGlCJZ+OVpkxZHAQEBAQEBAQEzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzP/jUMRQAkodHVkMMSxIpaOSVgYk8zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/40DEXwJJoR1JDBCsCSejrSGGGQzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzM/+NAxGICSVkdQAwwrAkjo6MBhhkzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/40DEaAJJQR0oDDDICSKjoyGGFPM8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//jQMR1AkktHSUMMKwJKCOkoYYZg88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888/+NAxHoCSXkdJQwwzAkpo6YBhhkzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/40DEggJKIR0lDDDMCSQjpSGGFPM8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888';
      audioElement.load();
      
      if (isRunning && timerValue > 0) {
        timer = setInterval(() => {
          setTimerValue(prev => {
            if (prev <= 1) {
              setIsRunning(false);
              if (audioElement) {
                audioElement.play();
              }
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }
    
    return () => {
      clearInterval(timer);
      if (audioElement) {
        audioElement.remove();
      }
    };
  }, [isAnimating, isRunning, timerValue]);

  return (
    <div className="bg-gradient-to-b from-blue-900 to-black h-full w-full flex flex-col p-4 text-white">
      <div className="text-center mb-6">
        <div className="text-xl font-bold">Eimer Timer</div>
        <div className="text-xs text-gray-400">Zeit einstellen und warten</div>
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Bucket visualization */}
        <div className={`w-48 h-56 relative transition-all duration-1000 ${isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          {/* Bucket shape */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-t-lg transform -translate-y-3"></div>
          </div>
          
          {/* Water fill */}
          <div 
            className="absolute bottom-0 left-1 right-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-b-lg transition-all duration-1000"
            style={{ 
              height: isAnimating ? `${(timerValue / 60) * 100}%` : '0%',
              maxHeight: '90%'
            }}
          >
            {/* Water surface */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-blue-300/50 backdrop-blur-sm"></div>
          </div>
          
          {/* Time display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-bold text-white drop-shadow-lg">{timerValue}s</div>
          </div>
        </div>
        
        {isAnimating && (
          <div className="mt-8 flex flex-col items-center">
            {/* Timer controls */}
            <div className="flex space-x-6 mb-6">
              <button 
                onClick={() => !isRunning && setTimerValue(prev => Math.max(0, prev - 5))}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
              >
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="4" rx="2" fill="white"/>
                </svg>
              </button>
              
              <button 
                onClick={() => setIsRunning(!isRunning)}
                className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-white/20"
              >
                {isRunning ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="6" width="4" height="12" rx="1" fill="black"/>
                    <rect x="14" y="6" width="4" height="12" rx="1" fill="black"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5L19 12L8 19V5Z" fill="black"/>
                  </svg>
                )}
              </button>
              
              <button 
                onClick={() => !isRunning && setTimerValue(prev => Math.min(60, prev + 5))}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C7.44772 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44771 0 8C0 8.55229 0.447715 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44771 15.5523 7 15 7H9V1C9 0.447715 8.55228 0 8 0Z" fill="white"/>
                </svg>
              </button>
            </div>
            
            {/* Status text */}
            <div className={`text-sm text-blue-200 ${isRunning ? 'animate-pulse' : ''}`}>
              {isRunning ? 'Timer läuft...' : timerValue === 0 ? 'Fertig!' : 'Bereit'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

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
    techStack: ["Swift", "SwiftUI", "Core Data", "CloudKit", "Vision API", "Combine"]
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
    techStack: ["Swift", "UIKit", "UserNotifications", "WidgetKit"]
  },
  {
    id: "eimer",
    title: "Eimer",
    slogan: "Einfach. Zeitsparend. Präzise.",
    description: "Eimer ist ein minimalistischer, aber leistungsstarker Timer, der speziell für Menschen entwickelt wurde, die kurze Zeitintervalle präzise messen müssen. Mit seiner intuitiven Bucket-Visualisierung sieht der Nutzer auf einen Blick, wie viel Zeit noch verbleibt. Perfekt für Präsentationen, Kochzeiten, Workouts oder jede Situation, die eine klare, visuelle Zeitdarstellung erfordert.",
    highlights: [
      "Intuitive Eimer-Visualisierung der verbleibenden Zeit",
      "Akustisches Signal bei Zeitablauf",
      "Einfache Plus- und Minus-Steuerung für schnelles Einstellen",
      "Minimalistisches Interface ohne Ablenkungen",
      "Elegantes Wasser-Design mit flüssigen Animationen"
    ],
    features: [
      {
        icon: "⏲️",
        title: "Visuelle Zeitanzeige",
        description: "Der Füllstand des Eimers sinkt proportional zur ablaufenden Zeit."
      },
      {
        icon: "🔉",
        title: "Akustisches Signal",
        description: "Klarer Ton bei Zeitablauf, auch bei geschlossener App hörbar."
      },
      {
        icon: "👆",
        title: "Einfache Bedienung",
        description: "Intuitives Interface mit Plus/Minus-Buttons für sekundengenaue Einstellungen."
      }
    ],
    platform: "iOS App",
    year: "2024",
    appContent: EimerProject,
    backgroundColor: "#1a365d",
    textColor: "#ffffff",
    techStack: ["Swift", "UIKit", "AVFoundation", "CoreAnimation"]
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
    techStack: ["Swift", "MapKit", "CoreLocation", "GeoJSON", "UIKit", "SwiftUI"]
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
    techStack: ["Swift", "UIKit", "AVFoundation", "UserNotifications", "CoreHaptics"]
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
    techStack: ["Swift", "SwiftUI", "Core Data", "CloudKit", "Combine", "AppKit"]
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
    techStack: ["Swift", "UIPasteboard", "NotificationCenter", "UIKit", "CoreImage"]
  }
];

export default projectsData;

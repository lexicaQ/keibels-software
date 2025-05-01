
import React, { useState, useEffect } from 'react';
import { Map, Globe, MapPin } from 'lucide-react';

interface ZentroAppContentProps {
  isAnimating: boolean;
}

const ZentroAppContent: React.FC<ZentroAppContentProps> = ({ isAnimating }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    if (isAnimating) {
      // Simulate map loading
      const timer = setTimeout(() => {
        setMapLoaded(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
    return () => {}; // Empty cleanup function when not animating
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
};

export default ZentroAppContent;

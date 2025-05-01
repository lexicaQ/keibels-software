
import React, { useEffect, useState } from 'react';

interface IOSSimulatorProps {
  appContent: React.ReactNode;
  color?: string;
  isAnimated?: boolean;
  isInteractive?: boolean;
}

const IOSSimulator: React.FC<IOSSimulatorProps> = ({ 
  appContent, 
  color = 'black', 
  isAnimated = true,
  isInteractive = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(loadTimer);
    };
  }, []);

  const handleScreenChange = (screen: string) => {
    if (isInteractive) {
      setCurrentScreen(screen);
    }
  };

  const toggleExpand = () => {
    if (isInteractive) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      className={`relative ${isAnimated ? 'transition-all duration-1000 transform' : ''}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-40px)'
      }}
    >
      {/* Phone frame */}
      <div 
        className={`relative ${isExpanded ? 'w-[350px] h-[700px]' : 'w-[280px] h-[570px]'} rounded-[40px] overflow-hidden shadow-xl transition-all duration-300`}
        style={{ backgroundColor: color }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[14px] z-20"></div>
        
        {/* Screen */}
        <div className="absolute inset-[3px] rounded-[38px] bg-gray-800 overflow-hidden">
          {/* Status bar */}
          <div className="h-[40px] w-full bg-black flex justify-between items-center px-6 pt-2">
            <div className="text-white text-xs">9:41</div>
            <div className="flex space-x-2">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="text-white text-xs">100%</div>
            </div>
          </div>
          
          {/* App content */}
          <div className="h-[calc(100%-40px)] overflow-hidden bg-white relative">
            {!isLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="w-12 h-12 border-4 border-t-black border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="w-full h-full">
                {currentScreen === 'home' && appContent}
                {currentScreen === 'settings' && (
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Einstellungen</h3>
                    <ul className="space-y-2">
                      <li className="p-3 bg-gray-50 rounded-lg">Profil</li>
                      <li className="p-3 bg-gray-50 rounded-lg">Benachrichtigungen</li>
                      <li className="p-3 bg-gray-50 rounded-lg">Datenschutz</li>
                      <li className="p-3 bg-gray-50 rounded-lg">Hilfe & Support</li>
                    </ul>
                  </div>
                )}
                {currentScreen === 'profile' && (
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Profil</h3>
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gray-300 mb-2"></div>
                      <p className="font-medium">Max Mustermann</p>
                      <p className="text-sm text-gray-500">Benutzer</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Bottom app bar if interactive */}
            {isInteractive && isLoaded && (
              <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-gray-200 bg-white flex justify-around items-center">
                <button 
                  onClick={() => handleScreenChange('home')}
                  className={`p-2 rounded-full ${currentScreen === 'home' ? 'bg-gray-100' : ''}`}
                >
                  <div className="w-6 h-6 bg-black rounded-sm"></div>
                </button>
                <button 
                  onClick={() => handleScreenChange('settings')}
                  className={`p-2 rounded-full ${currentScreen === 'settings' ? 'bg-gray-100' : ''}`}
                >
                  <div className="w-6 h-6 border-2 border-black rounded-full"></div>
                </button>
                <button 
                  onClick={() => handleScreenChange('profile')}
                  className={`p-2 rounded-full ${currentScreen === 'profile' ? 'bg-gray-100' : ''}`}
                >
                  <div className="w-6 h-6 bg-black rounded-md"></div>
                </button>
                <button 
                  onClick={toggleExpand}
                  className="p-2 rounded-full"
                >
                  <div className="w-6 h-6 flex items-center justify-center border-2 border-black">
                    {isExpanded ? '-' : '+'}
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white/80 rounded-full"></div>
      </div>
      
      {/* Reflection effect */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[40px] pointer-events-none"></div>
    </div>
  );
};

export default IOSSimulator;

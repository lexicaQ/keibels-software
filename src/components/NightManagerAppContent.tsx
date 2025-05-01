
import React, { useState, useEffect } from 'react';

interface NightManagerAppContentProps {
  isAnimating: boolean;
}

const NightManagerAppContent: React.FC<NightManagerAppContentProps> = ({ isAnimating }) => {
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
          
          // Play notification sound (this will be handled separately)
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
};

export default NightManagerAppContent;

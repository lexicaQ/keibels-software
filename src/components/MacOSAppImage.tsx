
import React from 'react';

interface MacOSAppImageProps {
  appName: string;
  variant?: 'todoManager' | 'copyClipCloud' | 'copyChecker';
  className?: string;
}

const MacOSAppImage: React.FC<MacOSAppImageProps> = ({ appName, variant = 'todoManager', className = '' }) => {
  
  // Different UI patterns based on app type
  const renderAppContent = () => {
    switch (variant) {
      case 'todoManager':
        return (
          <div className="p-3">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold text-white">To-Do Manager</div>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
                <div className="w-3 h-3 rounded-full bg-white/50"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-white/30 flex items-center justify-center">
                    {i === 2 && <div className="w-2 h-2 bg-white rounded-sm"></div>}
                  </div>
                  <div className={`h-3 ${i === 2 ? 'bg-white/30' : 'bg-white/70'} rounded w-${5 + i * 2}/12`}></div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex justify-between">
                <div className="w-20 h-6 bg-white/70 rounded"></div>
                <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center">
                  <div className="text-xs text-black font-bold">+</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'copyClipCloud':
        return (
          <div className="p-3">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold text-white">CopyClip Cloud</div>
              <div className="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white/80 rounded-sm"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-2 border border-white/20 rounded bg-white/5">
                  <div className="h-2 bg-white/70 rounded w-8/12 mb-1"></div>
                  <div className="h-2 bg-white/40 rounded w-10/12"></div>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-3 right-3 flex gap-2">
              <div className="w-7 h-7 rounded-full bg-white/20"></div>
              <div className="w-7 h-7 rounded-full bg-white/60"></div>
            </div>
          </div>
        );
      
      case 'copyChecker':
        return (
          <div className="p-3">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold text-white">CopyChecker</div>
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded bg-white/20"></div>
                <div className="w-5 h-5 rounded bg-white/40"></div>
              </div>
            </div>
            
            <div className="border border-white/20 rounded p-3 bg-white/5 mb-3">
              <div className="h-20 flex items-center justify-center border border-dashed border-white/30 rounded mb-2">
                <div className="text-xs text-white/50">Text prüfen</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="w-16 h-4 bg-white/40 rounded"></div>
                <div className="w-6 h-6 rounded bg-white/70"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 bg-white/10 rounded flex items-center justify-center">
                <div className="w-12 h-2 bg-white/40 rounded"></div>
              </div>
              <div className="h-8 bg-white/10 rounded flex items-center justify-center">
                <div className="w-10 h-2 bg-white/40 rounded"></div>
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-white">{appName}</div>
          </div>
        );
    }
  };

  return (
    <div className={`relative aspect-video bg-gradient-to-br from-gray-800 to-black rounded-lg overflow-hidden shadow-xl border border-white/10 ${className}`}>
      {/* Window controls */}
      <div className="absolute top-2 left-2 flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/70"></div>
        <div className="w-3 h-3 rounded-full bg-white/40"></div>
        <div className="w-3 h-3 rounded-full bg-white/20"></div>
      </div>
      
      <div className="p-5 h-full">
        {renderAppContent()}
      </div>
    </div>
  );
};

export default MacOSAppImage;


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
          <div className="p-3 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold text-white text-sm">To-Do Manager</div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/60"></div>
              </div>
            </div>
            
            <div className="mb-2 flex justify-between items-center">
              <div className="text-xs text-white/90 font-medium">Heute</div>
              <div className="text-xs text-white/60">3 Aufgaben</div>
            </div>
            
            <div className="space-y-2 flex-1">
              {[
                {text: "Design Review", done: false, prio: "high"},
                {text: "Code Refactoring", done: true, prio: "medium"},
                {text: "Meeting vorbereiten", done: false, prio: "low"}
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-2 p-1.5 rounded bg-white/5 border border-white/10 ${item.done ? 'opacity-60' : ''}`}>
                  <div className={`w-3.5 h-3.5 rounded-sm border ${item.done ? 'bg-white/70 border-white/80' : 'border-white/40'} flex items-center justify-center flex-shrink-0`}>
                    {item.done && <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>}
                  </div>
                  <div className={`text-xs ${item.done ? 'line-through text-white/60' : 'text-white/90'}`}>{item.text}</div>
                  <div className={`ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    item.prio === 'high' ? 'bg-white' : 
                    item.prio === 'medium' ? 'bg-white/60' : 
                    'bg-white/30'
                  }`}></div>
                </div>
              ))}
              
              <div className="text-xs text-white/70 font-medium mt-3 mb-1">Diese Woche</div>
              
              {[
                {text: "Projektpräsentation", done: false},
                {text: "Code Review", done: false}
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-1.5 rounded bg-white/5 border border-white/10">
                  <div className="w-3.5 h-3.5 rounded-sm border border-white/40 flex-shrink-0"></div>
                  <div className="text-xs text-white/90">{item.text}</div>
                </div>
              ))}
            </div>
            
            <div className="pt-3 mt-auto border-t border-white/20">
              <div className="flex justify-between items-center">
                <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center">
                  <div className="text-xs text-black font-bold">+</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-1 bg-white/70 rounded-full"></div>
                  <div className="w-1.5 h-1 bg-white/30 rounded-full"></div>
                  <div className="w-1.5 h-1 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'copyClipCloud':
        return (
          <div className="p-3 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold text-white text-sm">CopyClip Cloud</div>
              <div className="w-5 h-5 rounded-full bg-white/50 flex items-center justify-center">
                <div className="w-2.5 h-2.5 border border-white rounded-sm"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-1">
                <div className="px-2 py-0.5 rounded-md bg-white/20 text-white/90 text-xs">Alles</div>
                <div className="px-2 py-0.5 rounded-md bg-white/10 text-white/70 text-xs">Text</div>
                <div className="px-2 py-0.5 rounded-md bg-white/10 text-white/70 text-xs">Bilder</div>
              </div>
              <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center">
                <div className="w-2.5 h-2.5 text-white/70">⌘</div>
              </div>
            </div>
            
            <div className="space-y-2 flex-1">
              {[
                {type: "text", content: "https://github.com/user/repo", time: "Gerade eben"},
                {type: "code", content: "const handleCopy = () => {...}", time: "Vor 5m"},
                {type: "text", content: "Meeting Notes: Team call at 3pm", time: "Vor 10m"},
                {type: "image", content: "screenshot.png", time: "Vor 30m"}
              ].map((item, i) => (
                <div key={i} className="p-2 border border-white/15 rounded bg-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xs text-white/60">{item.time}</div>
                    <div className="px-1.5 py-0.5 text-[10px] rounded bg-white/20 text-white/90">{item.type}</div>
                  </div>
                  <div className={`text-xs ${item.type === 'image' ? 'bg-white/10 p-1 rounded flex items-center justify-center' : ''}`}>
                    {item.type === 'image' ? (
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 text-white/70">📷</div>
                        <span className="text-white/80">{item.content}</span>
                      </div>
                    ) : (
                      <span className="text-white/80 truncate block">{item.content}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-auto pt-2">
              <div className="border-t border-white/15 pt-2 flex justify-between items-center">
                <div className="text-xs text-white/60">4 Einträge</div>
                <div className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 text-white/90">🗑️</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white/50 flex items-center justify-center">
                    <div className="text-xs text-black font-bold">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'copyChecker':
        return (
          <div className="p-3 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold text-white text-sm">CopyChecker</div>
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white/90 rounded-full"></div>
                </div>
                <div className="w-4 h-4 rounded bg-white/40 flex items-center justify-center">
                  <div className="w-2 h-0.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="border border-white/15 rounded p-2.5 bg-white/5 mb-3">
                <div className="text-xs font-medium text-white/90 mb-2">Letzte Kopie</div>
                <div className="h-16 flex items-center justify-center border border-dashed border-white/20 rounded mb-2 bg-white/5">
                  <div className="text-xs text-white/60 flex items-center gap-1.5">
                    <div className="w-3 h-3 text-white/60">📋</div>
                    <span>Text oder Bild hier einfügen</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <div className="px-1.5 py-0.5 text-[10px] rounded bg-white/20 text-white/90">Text</div>
                    <div className="px-1.5 py-0.5 text-[10px] rounded bg-white/10 text-white/70">Bild</div>
                  </div>
                  <div className="w-5 h-5 rounded bg-white/50 flex items-center justify-center">
                    <div className="text-[8px] text-black font-bold">✓</div>
                  </div>
                </div>
              </div>
              
              <div className="text-xs font-medium text-white/90 mb-2">Letzte Aktivitäten</div>
              
              <div className="space-y-1.5">
                {[
                  {type: "text", time: "14:05"},
                  {type: "image", time: "13:45"},
                  {type: "text", time: "13:30"}
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-1.5 bg-white/5 border border-white/10 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 text-white/60">{item.type === 'text' ? '📄' : '📷'}</div>
                      <span className="text-[10px] text-white/80">{item.type}</span>
                    </div>
                    <span className="text-[10px] text-white/60">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-auto pt-2">
              <div className="border-t border-white/15 pt-2 flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <span className="text-xs text-white/80">Aktiv</span>
                </div>
                <div className="text-[10px] text-white/50">Seit 2h 15m</div>
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

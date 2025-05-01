
import React, { useState } from 'react';

interface TodoAppContentProps {
  isAnimating: boolean;
}

const TodoAppContent: React.FC<TodoAppContentProps> = ({ isAnimating }) => {
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
};

export default TodoAppContent;


import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  slogan?: string;
  year?: string;
  platform?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  slogan,
  year,
  platform,
  delay = 0 
}) => {
  return (
    <div 
      className={`group bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in`}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0 
      }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-1">{title}</h3>
            {slogan && <p className="text-gray-600 italic text-sm mb-2">{slogan}</p>}
          </div>
          {(year || platform) && (
            <div className="text-right">
              {year && <span className="text-sm text-gray-500 block">{year}</span>}
              {platform && <span className="text-sm font-medium">{platform}</span>}
            </div>
          )}
        </div>
        
        <p className="text-gray-700 flex-grow mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex justify-end mt-auto">
          <button className="flex items-center text-sm font-medium group-hover:underline">
            View Details
            <ArrowRight size={16} className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

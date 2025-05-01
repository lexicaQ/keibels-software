
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DeviceFrame from './DeviceFrame';
import { useIsMobile } from '../hooks/use-mobile';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  slogan?: string;
  year?: string;
  platform?: string;
  delay?: number;
  isLeft?: boolean;
  appImage?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id,
  title, 
  description, 
  slogan,
  year,
  platform,
  delay = 0,
  isLeft = true,
  appImage
}) => {
  const deviceType = platform?.toLowerCase().includes('ios') ? 'ios' : 'macos';
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={cardRef}
      className="group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-500 animate-fade-in hover:shadow-2xl"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0 
      }}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
        <div className="p-8">
          <div className="mb-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">{title}</h3>
              {slogan && <p className="text-gray-600 italic mb-3">{slogan}</p>}
            </div>
            {(year || platform) && (
              <div className="flex gap-3 mb-4">
                {platform && (
                  <span className="text-sm bg-black text-white px-3 py-1 rounded-full">
                    {platform}
                  </span>
                )}
                {year && (
                  <span className="text-sm text-gray-500 px-3 py-1 border border-gray-200 rounded-full">
                    {year}
                  </span>
                )}
              </div>
            )}
          </div>
          
          <p className="text-gray-700 mb-6 line-clamp-4">
            {description}
          </p>
          
          <Link 
            to={`/projects/${id}`}
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
            onClick={(e) => {
              // This prevents the page from reloading
              // and uses client-side routing instead
              if (isMobile) {
                e.preventDefault();
                window.history.pushState({}, '', `/projects/${id}`);
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
          >
            Mehr Details
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className={`relative w-full h-[400px] overflow-hidden bg-gray-100 flex items-center justify-center ${isLeft ? 'lg:order-last' : 'lg:order-first'}`}>
          <div className={`transform ${isLeft ? 'rotate-[-10deg]' : 'rotate-[10deg]'} transition-all duration-500 group-hover:rotate-0 ${isMobile ? 'scale-75' : ''}`}>
            <DeviceFrame 
              type={deviceType} 
              imageUrl={appImage}
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

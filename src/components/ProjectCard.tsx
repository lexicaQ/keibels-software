
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DeviceFrame from './DeviceFrame';
import { useIsMobile } from '../hooks/use-mobile';
import { Separator } from '@/components/ui/separator';

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg border border-black transition-all duration-300 hover:bg-gray-800 hover:border-gray-800"
            onClick={(e) => {
              if (isMobile) {
                e.preventDefault();
                window.history.pushState({}, '', `/projects/${id}`);
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
          >
            Details ansehen
          </Link>
        </div>

        <div className="relative w-full h-[400px] overflow-hidden bg-gray-100 flex items-center justify-center lg:order-last">
          {/* Vertical divider visible on large screens */}
          <div className="absolute top-0 left-0 h-full w-px bg-gray-200 hidden lg:block"></div>
          
          <div className="transform transition-all duration-500 group-hover:scale-105 px-8 py-4 w-full h-full flex items-center justify-center">
            <DeviceFrame 
              type={deviceType} 
              imageUrl={appImage}
              className="shadow-2xl max-h-[350px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

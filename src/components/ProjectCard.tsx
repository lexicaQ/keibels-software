
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
      className="group bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-500 animate-fade-in hover:shadow-xl"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0 
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className={`p-6 lg:col-span-3 ${!isLeft ? 'lg:order-last' : ''}`}>
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
          
          <p className="text-gray-700 mb-6 line-clamp-3">
            {description}
          </p>
          
          <Link 
            to={`/projects/${id}`}
            className="inline-flex items-center px-5 py-2.5 bg-black text-white rounded-md transition-all duration-300 hover:bg-gray-800 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:translate-y-1 after:bg-transparent"
            onClick={(e) => {
              if (isMobile) {
                e.preventDefault();
                window.history.pushState({}, '', `/projects/${id}`);
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
          >
            <span>Projekt ansehen</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="lg:col-span-2 relative w-full h-[350px] bg-gray-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-50 opacity-20"></div>
          <div className="transform transition-all duration-500 group-hover:scale-105 px-6 py-4 w-full h-full flex items-center justify-center">
            <DeviceFrame 
              type={deviceType} 
              imageUrl={appImage}
              className="shadow-xl max-h-[300px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

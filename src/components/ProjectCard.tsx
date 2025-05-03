
import React, { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  featured?: boolean;
  children?: ReactNode;
  size?: 'sm' | 'lg';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  featured = false,
  size = 'lg',
  children,
}) => {

  const isEchoBioNix = title === "EchoBioNix";
  const echoBioNixUrl = "https://precious-pudding-d8893b.netlify.app/";

  return (
    <div className={`portfolio-card relative overflow-hidden ${size === 'lg' ? 'md:col-span-2' : ''}`}
        onClick={isEchoBioNix ? () => window.open(echoBioNixUrl, "_blank", "noopener,noreferrer") : undefined}
        style={{ cursor: isEchoBioNix ? 'pointer' : 'default' }}
      >


      {featured && (
        <Badge 
          className="absolute top-4 left-4 bg-primary hover:bg-primary text-white"
        >
          Featured
        </Badge>
      )}
      
      <div className="flex flex-col h-full">
        {image && (
          <div className="mb-4 rounded-xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-40 md:h-48 object-cover"
              />
          </div>
        )}
        
        <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <Badge key={index} className="bg-muted text-muted-foreground hover:bg-muted">
              {tag}
            </Badge>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;

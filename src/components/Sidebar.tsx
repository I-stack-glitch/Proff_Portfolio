
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, Mail, GraduationCap, Code, Settings } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>(location.pathname);

  const menuItems = [
    { icon: Home, path: '/', tooltip: 'Home' },
    { icon: User, path: '/profile', tooltip: 'Profile' },
    { icon: Briefcase, path: '/projects', tooltip: 'Projects' },
    { icon: GraduationCap, path: '/academic', tooltip: 'Academic Performance' },
    { icon: Code, path: '/computer-science', tooltip: 'Why Computer Science' },
    { icon: Mail, path: '/contact', tooltip: 'Contact Me' },
  ];

  const handleNavigation = (path: string) => {
    setActiveItem(path);
    navigate(path);
  };

  const isActive = (path: string) => {
    return activeItem === path;
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-sidebar flex flex-col items-center py-8 gap-6">
      <div className="mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-copper-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          P
        </div>
      </div>
      
      {menuItems.map((item) => (
        <Tooltip key={item.path} delayDuration={300}>
          <TooltipTrigger asChild>
            <div 
              className={`sidebar-icon ${isActive(item.path) ? 'bg-sidebar-accent text-primary' : ''} hover:bg-sidebar-accent transition-colors cursor-pointer arrow-hover`}
              onClick={() => handleNavigation(item.path)}
            >
              <item.icon size={24} />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{item.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      ))}
      
      <div className="mt-auto">
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <div className="sidebar-icon arrow-hover">
              <Settings size={24} />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;

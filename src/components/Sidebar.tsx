
import React from 'react';
import { Home, Briefcase, User, Mail, Star, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-sidebar flex flex-col items-center py-8 gap-6">
      <div className="mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-copper-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          P
        </div>
      </div>
      
      <div className="sidebar-icon bg-sidebar-accent">
        <Home size={24} />
      </div>
      
      <div className="sidebar-icon">
        <Briefcase size={24} />
      </div>
      
      <div className="sidebar-icon">
        <Star size={24} />
      </div>
      
      <div className="sidebar-icon">
        <User size={24} />
      </div>
      
      <div className="sidebar-icon">
        <Mail size={24} />
      </div>
      
      <div className="mt-auto sidebar-icon">
        <Settings size={24} />
      </div>
    </div>
  );
};

export default Sidebar;

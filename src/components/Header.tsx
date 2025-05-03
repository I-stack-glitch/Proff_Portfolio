
import React from 'react';
import { Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <p className="text-muted-foreground">Good evening,</p>
        <h1 className="text-2xl font-bold text-white">{username.toUpperCase()}</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            className="bg-card border-none pl-10 rounded-full w-64" 
            placeholder="Search projects..." 
          />
        </div>
        
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
          <User size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;

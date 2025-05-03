import React from 'react';
import { Search, User, ThumbsUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ username = "Mohammed Anas" }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const handleExploreClick = () => {
    window.open("https://precious-pudding-d8893b.netlify.app/", "_blank");
  };
  
  return (
    <div className="mb-8 px-4 md:px-0">
      {/* Top header with greeting and search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <p className="text-muted-foreground text-sm md:text-base">Good evening,</p>
          <h1 className="text-xl md:text-2xl font-bold text-white overflow-hidden text-ellipsis whitespace-nowrap">
            {username}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              className="bg-white/10 border-none pl-10 rounded-full w-64" 
              placeholder="Search projects..." 
            />
          </div>
          
          <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
        </div>
      </div>
      
      {/* Featured content section with warm gradient - only show on home page */}
      {isHomePage && (
        <div className="rounded-xl p-4 md:p-6 bg-gradient-to-r from-copper-500 to-red-500 text-white mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Project</h2>
              <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-base">Explore the future of human-machine interaction with EchoBioNix—where smart gloves bring bionic control to life.</p>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 md:mb-8">
                <Button
                  className="rounded-full bg-white text-red-500 hover:bg-white/90 px-6" 
                  onClick={handleExploreClick}
                >
                  <Search size={16} className="mr-2" />
                  Explore now
                </Button>
                
                <div className="flex gap-2">
                  <Button size="icon" variant="secondary" className="rounded-full bg-white/20 hover:bg-white/30">
                    <ThumbsUp size={16} />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full bg-white/20 hover:bg-white/30">
                    <Search size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <ThumbsUp size={16} className="text-white/80" />
                <span className="text-sm text-white/80 mr-2">120 people liked this</span>
                
                <div className="flex -space-x-2 ml-2">
                  <Avatar className="border-2 border-copper-500 w-6 h-6">
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-copper-500 w-6 h-6">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-copper-500 w-6 h-6">
                    <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" />
                    <AvatarFallback>C</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 opacity-30 blur-2xl absolute"></div>
                
                {/* 3D curved image effect */}
                <div className="relative z-10 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  {/* Image with curved shape */}
                  <div className="overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-r from-red-500 to-copper-500 p-1">
                    {/* Inner container with image */}
                    <div className="overflow-hidden rounded-2xl transform scale-105 transition-all duration-500 hover:scale-110">
                      <img 
                        src="https://i.postimg.cc/kMSSMfDK/arm.jpg"
                        alt="Character artwork" 
                        className="relative z-10 h-48 object-cover transform transition-all duration-300 w-full"
                      />
                      
                      {/* Highlight overlays */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-tl from-black/30 to-transparent pointer-events-none rounded-bl-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Shadow underneath */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-black/40 blur-md rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
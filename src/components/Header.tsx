
import React from 'react';
import { Search, User, ThumbsUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <div className="mb-8">
      {/* Top header with greeting and search */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-muted-foreground">Good evening,</p>
          <h1 className="text-2xl font-bold text-white">{username.toUpperCase()}</h1>
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
      
      {/* Featured content section with warm gradient */}
      <div className="rounded-xl p-6 bg-gradient-to-r from-copper-500 to-red-500 text-white mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Project</h2>
            <p className="text-white/80 mb-6">Check out the latest design trends and get inspired for your next project.</p>
            
            <div className="flex items-center gap-4 mb-8">
              <Button className="rounded-full bg-white text-red-500 hover:bg-white/90 px-6">
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
            
            <div className="flex items-center gap-2">
              <ThumbsUp size={16} className="text-white/80" />
              <span className="text-sm text-white/80">120 people liked this</span>
              
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
              <img 
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                alt="Character artwork" 
                className="relative z-10 h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

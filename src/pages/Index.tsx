import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Briefcase, Code, Star, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  // Sample projects data
  const featuredProjects = [
    {
      title: "EchoBioNix",
      description: "EchoBioNix is a wearable robotics project that combines a smart glove with a bionic arm, using flex sensors and servo motors to replicate human finger movements in real time—bridging the gap between gesture control and assistive robotics.",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      featured: true,
      image: "https://i.postimg.cc/K88rYB6b/echo.jpg"
    },
    {
      title: "Jarvis AI Voice Assistant",
      description: "JARVIS is a custom AI-powered voice assistant designed to automate desktop tasks, control apps, play media, and generate content—integrating advanced language models, speech synthesis, and real-time command execution for a seamless user experience.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://i.ytimg.com/vi/0Wg5CdZpJks/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDQgWyhyMA8=&rs=AOn4CLAoENSKEjzN2am_sZa1mphpubkWYw"
    },
    {
      title: "Upcoming Projects....",
      description: "------------------",
      tags: ["NA", "NA"],
      size: "sm"
    },
    {
      title: "Upcoming Projects.......",
      description: "-----------------------",
      tags: ["NA", "NA", "NA"],
      size: "sm"
    }
  ];
  
  // Sample recent projects
  const recentProjects = [
    {
      title: "EchoBioNix",
      description: "EchoBioNix is a wearable robotics project that combines a smart glove with a bionic arm, using flex sensors and servo motors to replicate human finger movements in real time—bridging the gap between gesture control and assistive robotics.",
      tags: ["Next.js", "Contentful", "SEO"],
      image: "https://i.postimg.cc/K88rYB6b/echo.jpg"
    }
  ];
  
  // Stats for the StatsCard
  const stats = [
    {
      icon: <Briefcase size={20} className="text-primary" />,
      value: "1,240h",
      label: "Projects"
    },
    {
      icon: <Code size={20} className="text-secondary" />,
      value: "5,420h",
      label: "Coding"
    },
    {
      icon: <Star size={20} className="text-copper-400" />,
      value: "4,580h",
      label: "Design"
    }
  ];

  // Profile data
  const profileData = {
    name: "Mohammed Anas",
    role: "Software and Robotics Eng",
    image: "https://i.postimg.cc/C11ZVsXB/Reshot.jpg"
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      
      <div className="flex-1 ml-20 p-10">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {/* Profile Hero Section */}
            <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-copper-400/10 border border-primary/10 flex items-center gap-8">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-red-500 to-copper-400 blur"></div>
                <Avatar className="w-32 h-32 border-4 border-background">
                  {profileData.image ? (
                    <AvatarImage src={profileData.image} alt={profileData.name} />
                  ) : (
                    <AvatarFallback className="bg-muted text-4xl">
                      <User size={48} />
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
              <div>
                <h2 className="text-3xl font-bold">{profileData.name}</h2>
                <p className="text-muted-foreground mb-4">{profileData.role}</p>
                <Button onClick={() => navigate('/profile')} variant="outline" className="border-primary/20 hover:border-primary/40">
                  View Profile
                </Button>
              </div>
            </div>
            
            <SectionHeader 
              title="Featured Projects" 
              action={<Button variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={() => navigate('/projects')}>See More</Button>}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  featured={project.featured}
                  size={project.size as "sm" | "lg" | undefined}
                />
              ))}
            </div>
            
            <SectionHeader 
              title="Recent Projects" 
              action={<Button variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={() => navigate('/projects')}>See More</Button>}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recentProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <StatsCard totalHours="12,340h" stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
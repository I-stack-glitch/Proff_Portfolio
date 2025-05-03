
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // All projects
  const allProjects = [
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
      description: "------------------------------------",
      tags: ["Not Applicable", "Not Applicable"],
      image: "https://i.postimg.cc/xCfbs292/questionmark.jpg"
    }
    /*{
      title: "Task Manager",
      description: "A productivity tool for managing tasks and projects with drag-and-drop functionality.",
      tags: ["React", "TypeScript", "Firebase"],
    },
    {
      title: "Blog Platform",
      description: "A customizable blog platform with Markdown support and SEO optimization.",
      tags: ["Next.js", "Contentful", "SEO"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      title: "Dashboard UI",
      description: "A responsive admin dashboard with customizable widgets and data visualization.",
      tags: ["React", "D3.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Personal Finance Tracker",
      description: "An application to help users manage their finances and track expenses.",
      tags: ["React", "Chart.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      title: "Recipe App",
      description: "A platform for users to discover, save, and share their favorite recipes.",
      tags: ["React Native", "Redux", "API Integration"],
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }*/
  ];

  // Filter projects based on search query
  const filteredProjects = allProjects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      
      <div className="flex-1 ml-20 p-10">
        <Header username="Projects" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <SectionHeader title="All Projects" className="mb-0" />
            
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                type="text" 
                placeholder="Search projects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                project.title === "EchoBioNix" ? (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  
                />
                ) : (<ProjectCard key={index} title={project.title} description={project.description} image={project.image} tags={project.tags}/>)

                
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search query</p>
                <Button onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

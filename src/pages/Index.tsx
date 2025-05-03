import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';
import { Button } from '@/components/ui/button';
import { Briefcase, Code, Star } from 'lucide-react';

const Index = () => {
  // Sample projects data
  const featuredProjects = [
    {
      title: "Portfolio Redesign",
      description: "A complete redesign of my professional portfolio using React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      featured: true,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      title: "Weather App",
      description: "A simple weather application that fetches real-time weather data.",
      tags: ["JavaScript", "API Integration"],
      size: "sm" as "sm"
    },
    {
      title: "Task Manager",
      description: "A productivity tool for managing tasks and projects with drag-and-drop functionality.",
      tags: ["React", "TypeScript", "Firebase"],
      size: "sm" as "sm"
    }
  ];
  
  // Sample recent projects
  const recentProjects = [
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
  
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      
      <div className="flex-1 ml-20 p-10">
        <Header username="Designer" />
        
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <SectionHeader 
              title="Featured Projects" 
              action={<Button variant="ghost" className="text-muted-foreground hover:text-foreground">See More</Button>}
            />
            
            <div className="grid grid-cols-2 gap-6 mb-8">
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
              action={<Button variant="ghost" className="text-muted-foreground hover:text-foreground">See More</Button>}
            />
            
            <div className="grid grid-cols-2 gap-6">
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

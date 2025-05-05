import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Award } from 'lucide-react';

const ComputerScience = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />

      <div className="flex-1 ml-20 p-10">
        <Header username="Developer" />

        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Why I Chose Computer Science" />

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-secondary/20">
                  <Code size={24} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">My Journey into Computer Science</h3>
              </div>

              <div className="space-y-4 text-lg">
                <p>
                  My fascination with Computer Science began when I was 12 years old and my parents got me my first 
                  computer. What started as playing games quickly evolved into a curiosity about how they were built.
                </p>

                <p>
                  By high school, I had taught myself basic programming and was creating simple applications. 
                  The ability to transform ideas into functioning software gave me a sense of accomplishment 
                  unlike anything else.
                </p>

                <p>
                  I chose Computer Science as my field of study for several reasons:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Problem-solving:</strong> I love tackling complex problems and breaking them down into 
                    manageable solutions.
                  </li>
                  <li>
                    <strong>Creativity:</strong> Programming is as much an art as it is a science, allowing me to 
                    express my creativity through code.
                  </li>
                  <li>
                    <strong>Innovation:</strong> The field is constantly evolving, presenting endless opportunities 
                    to learn and innovate.
                  </li>
                  <li>
                    <strong>Impact:</strong> Technology touches virtually every aspect of modern life, offering 
                    numerous ways to make a positive impact on the world.
                  </li>
                </ul>

                <p>
                  Through my journey in Computer Science, I've discovered a passion for creating intuitive, 
                  user-friendly interfaces that solve real problems. Every project is an opportunity to learn 
                  something new and push the boundaries of what I can achieve.
                </p>

                <p>
                  As I continue to grow as a developer, I'm excited to explore emerging technologies and find new 
                  ways to merge technical expertise with creative design.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Certificates Card */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-secondary/20">
                  <Award size={24} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Awards & Certificates</h3>
              </div>

              <div className="space-y-6 text-lg">
                <p>
                  Throughout my journey, I've been recognized for both technical excellence and creative innovation. 
                  Here are some of the certifications and honors I've received:
                </p>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="group">
                    <div className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      <a href="Link1" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="https://i.postimg.cc/Vs4ZKbV1/certificate1.jpg"
                          alt="Certified Green School Audit Holder" 
                          className="w-full h-40 object-cover"
                        />
                      </a>
                    </div>
                    <p className="mt-2 text-center text-sm font-medium">Certified Green School Audit Holder</p>
                  </div>

                  <div className="group">
                    <div className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      <a href="Link2" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="https://i.postimg.cc/Kvs6NvG9/Certificate2.jpg"
                          alt="Volunteer – Technovanza 2024" 
                          className="w-full h-40 object-cover"
                        />
                      </a>
                    </div>
                    <p className="mt-2 text-center text-sm font-medium">Volunteer – Technovanza 2024</p>
                  </div>

                  <div className="group">
                    <div className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      <a href="Link3" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/api/placeholder/400/320"
                          alt="Microsoft Certified: Azure Developer Associate" 
                          className="w-full h-40 object-cover"
                        />
                      </a>
                    </div>
                    <p className="mt-2 text-center text-sm font-medium">Microsoft Azure Developer Associate</p>
                  </div>
                </div>

                {/* Second Row - 2 certificates, centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-20">
                  <div className="group">
                    <div className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      <a href="Link4" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/api/placeholder/400/320"
                          alt="Hackathon First Place Award" 
                          className="w-full h-40 object-cover"
                        />
                      </a>
                    </div>
                    <p className="mt-2 text-center text-sm font-medium">Hackathon First Place Award</p>
                  </div>

                  <div className="group">
                    <div className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      <a href="Link5" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/api/placeholder/400/320"
                          alt="Best Project Innovation Award" 
                          className="w-full h-40 object-cover"
                        />
                      </a>
                    </div>
                    <p className="mt-2 text-center text-sm font-medium">Best Project Innovation Award</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComputerScience;

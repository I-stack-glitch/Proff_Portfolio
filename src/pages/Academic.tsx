
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, GraduationCap, School } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Academic = () => {
  const academicData = {
    tenthGrade: {
      school: "India International School",
      year: "2015",
      score: "95%",
      subjects: [
        { name: "Mathematics", score: 98 },
        { name: "Science", score: 95 },
        { name: "English", score: 92 },
        { name: "Social Studies", score: 94 },
        { name: "Computer Science", score: 99 },
      ]
    },
    twelfthGrade: {
      school: "India International School",
      year: "2017",
      score: "92%",
      subjects: [
        { name: "Mathematics", score: 95 },
        { name: "Physics", score: 90 },
        { name: "Chemistry", score: 88 },
        { name: "Computer Science", score: 98 },
        { name: "English", score: 89 },
      ]
    }
  };
  
  // Function to determine the color based on the score
  const getScoreColor = (score: number) => {
    if (score >= 95) return "bg-green-500";
    if (score >= 90) return "bg-green-400";
    if (score >= 85) return "bg-green-300";
    if (score >= 80) return "bg-orange-400";
    if (score >= 75) return "bg-orange-300";
    return "bg-red-500";
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      
      <div className="flex-1 ml-20 p-10">
        <Header />
        
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Academic Performance" />
          
          {/* School Information Card */}
          <Card className="mb-8">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <School size={24} className="text-primary" />
              </div>
              <CardTitle>India International School</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-lg font-semibold mb-3">Why I Chose IIS for my 10th and 12th</h3>
                <p className="text-muted-foreground mb-3">
                  I completed both my 10th and 12th grades at IIS because of its strong academic foundation and progressive approach to education. What stood out to me was the school's deep commitment to holistic development, starting right from the kindergarten level. IIS integrates the Montessori System to nurture physical fitness and mental alertness, creating an environment that supports curiosity, creativity, and excellence from an early age.
                </p>
                <p className="text-muted-foreground">
                  Throughout my years there, I was part of a child-friendly and inspiring learning atmosphere that made education feel exciting and meaningful. The school's emphasis on both academic and non-academic growth helped me develop a well-rounded perspective and instilled in me a genuine love for learning. Being part of a place known for its innovation in early education and consistent student achievements made IIS a defining chapter in my academic journey.
                </p>
              </div>
              <div className="col-span-1">
                <div className="rounded-lg overflow-hidden h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="India International School" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 gap-8 mb-8">
            {/* 10th Grade Card with Modern Bar Chart Style */}
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <BarChart size={24} className="text-primary" />
                </div>
                <CardTitle>10th Grade Mark Card</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p><strong>School:</strong> {academicData.tenthGrade.school}</p>
                  <p><strong>Year:</strong> {academicData.tenthGrade.year}</p>
                  <p><strong>Overall Score:</strong> {academicData.tenthGrade.score}</p>
                </div>
                
                <div className="space-y-6">
                  {academicData.tenthGrade.subjects.map((subject) => (
                    <div key={subject.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{subject.name}</span>
                        <span className="font-medium">{subject.score}%</span>
                      </div>
                      <Progress 
                        value={subject.score} 
                        className="h-3" 
                        aria-label={`${subject.name} score: ${subject.score}%`}
                        style={{ 
                          backgroundColor: "var(--muted)" 
                        }}
                      >
                        <div 
                          className={`h-full ${getScoreColor(subject.score)}`} 
                          style={{ 
                            width: `${subject.score}%`,
                            borderRadius: "inherit"
                          }}
                        />
                      </Progress>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* 12th Grade Card with Modern Bar Chart Style */}
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <BarChart size={24} className="text-primary" />
                </div>
                <CardTitle>12th Grade Mark Card</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p><strong>School:</strong> {academicData.twelfthGrade.school}</p>
                  <p><strong>Year:</strong> {academicData.twelfthGrade.year}</p>
                  <p><strong>Overall Score:</strong> {academicData.twelfthGrade.score}</p>
                </div>
                
                <div className="space-y-6">
                  {academicData.twelfthGrade.subjects.map((subject) => (
                    <div key={subject.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{subject.name}</span>
                        <span className="font-medium">{subject.score}%</span>
                      </div>
                      <Progress 
                        value={subject.score} 
                        className="h-3" 
                        aria-label={`${subject.name} score: ${subject.score}%`}
                        style={{ 
                          backgroundColor: "var(--muted)" 
                        }}
                      >
                        <div 
                          className={`h-full ${getScoreColor(subject.score)}`} 
                          style={{ 
                            width: `${subject.score}%`,
                            borderRadius: "inherit"
                          }}
                        />
                      </Progress>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;

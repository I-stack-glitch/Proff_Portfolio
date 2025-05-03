
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const Academic = () => {
  const academicData = {
    tenthGrade: {
      school: "St. Mary's High School",
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
      school: "St. Joseph's College",
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
  
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      
      <div className="flex-1 ml-20 p-10">
        <Header username="Student" />
        
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Academic Performance" />
          
          <div className="grid grid-cols-1 gap-8 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <CardTitle>10th Grade Mark Card</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p><strong>School:</strong> {academicData.tenthGrade.school}</p>
                  <p><strong>Year:</strong> {academicData.tenthGrade.year}</p>
                  <p><strong>Overall Score:</strong> {academicData.tenthGrade.score}</p>
                </div>
                
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3">Subject</th>
                        <th className="text-right p-3">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {academicData.tenthGrade.subjects.map((subject) => (
                        <tr key={subject.name} className="border-t">
                          <td className="p-3">{subject.name}</td>
                          <td className="p-3 text-right">{subject.score}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <CardTitle>12th Grade Mark Card</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p><strong>School:</strong> {academicData.twelfthGrade.school}</p>
                  <p><strong>Year:</strong> {academicData.twelfthGrade.year}</p>
                  <p><strong>Overall Score:</strong> {academicData.twelfthGrade.score}</p>
                </div>
                
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3">Subject</th>
                        <th className="text-right p-3">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {academicData.twelfthGrade.subjects.map((subject) => (
                        <tr key={subject.name} className="border-t">
                          <td className="p-3">{subject.name}</td>
                          <td className="p-3 text-right">{subject.score}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

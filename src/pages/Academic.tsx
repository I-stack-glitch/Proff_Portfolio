import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, GraduationCap, School, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Academic = () => {
  const academicData = {
    tenthGrade: {
      school: "India International School",
      year: "2015",
      score: "95%",
      gpa: "9.5",
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
      gpa: "9.2",
      subjects: [
        { name: "Mathematics", score: 95 },
        { name: "Physics", score: 90 },
        { name: "Chemistry", score: 88 },
        { name: "Computer Science", score: 98 },
        { name: "English", score: 89 },
      ]
    },
    manipalUniversity: {
      school: "Manipal University, UAE",
      image: "https://i.postimg.cc/V6Y6WWmZ/manipal.png",
      description: `Choosing Manipal University for my higher education was a deliberate step towards an environment that blends academic excellence with innovation and hands-on experience. Known for its global standards and dynamic academic culture, Manipal offered me more than just a degree—it provided a platform to think critically, explore deeply, and grow holistically.
        
        What I value most about my time here is the emphasis on practical learning, interdisciplinary collaboration, and research-oriented projects. The curriculum is designed to be industry-relevant, encouraging us to build real-world skills alongside strong theoretical foundations. Manipal's vibrant campus life, combined with its state-of-the-art labs and supportive faculty, has played a major role in shaping my technical skills, leadership abilities, and creative thinking.

        Being part of such a forward-thinking institution has not only helped me grow academically but has also prepared me to face challenges with confidence and adaptability.`,
      years: [
        {
          year: "1st Year",
          semesters: [
            {
              name: "Semester 1",
              gpa: "8.6",
              image: "https://i.postimg.cc/htbD6XD7/sem1.png",
              subjects: [
                { name: "Engineering Mathematics", score: 88 },
                { name: "Physics", score: 85 },
                { name: "Basic Electrical Engineering", score: 83 },
                { name: "Workshop Practice", score: 90 }
              ]
            },
            {
              name: "Semester 2",
              gpa: "8.8",
              image: "https://i.postimg.cc/nhqHQ0Cm/Chat-GPT-Image-May-4-2025-03-49-02-PM.png",
              subjects: [
                { name: "Engineering Chemistry", score: 86 },
                { name: "Engineering Graphics", score: 89 },
                { name: "Programming in C", score: 91 },
                { name: "Environmental Studies", score: 87 }
              ]
            }
          ]
        },
        {
          year: "2nd Year",
          semesters: [
            {
              name: "Semester 3",
              gpa: "8.7",
              image: "https://i.postimg.cc/44ry7KBr/Chat-GPT-Image-May-4-2025-03-50-21-PM.png",
              subjects: [
                { name: "Data Structures", score: 90 },
                { name: "Digital Electronics", score: 84 },
                { name: "Discrete Mathematics", score: 87 },
                { name: "Computer Organization", score: 85 }
              ]
            },
            {
              name: "Semester 4",
              gpa: "8.9",
              image: "https://i.postimg.cc/BnCnVm40/Chat-GPT-Image-May-4-2025-03-51-13-PM.png",
              subjects: [
                { name: "Object-Oriented Programming", score: 92 },
                { name: "Database Systems", score: 89 },
                { name: "Operating Systems", score: 88 },
                { name: "Software Engineering", score: 86 }
              ]
            }
          ]
        },
        {
          year: "3rd Year",
          semesters: [
            {
              name: "Semester 5",
              gpa: "8.9",
              image: "https://i.postimg.cc/W43Tfj5G/Chat-GPT-Image-May-4-2025-03-52-51-PM.png",
              subjects: [
                { name: "Design & Analysis of Algorithms", score: 91 },
                { name: "Web Technologies", score: 90 },
                { name: "Computer Networks", score: 88 },
                { name: "Compiler Design", score: 87 }
              ]
            },
            {
              name: "Semester 6",
              gpa: "9.1",
              image: "https://i.postimg.cc/ZRWY0Z3b/Chat-GPT-Image-May-4-2025-03-52-01-PM.png",
              subjects: [
                { name: "Mobile Application Development", score: 92 },
                { name: "Machine Learning", score: 94 },
                { name: "Cloud Computing", score: 89 },
                { name: "Open Elective", score: 88 }
              ]
            }
          ]
        },
        {
          year: "4th Year",
          semesters: [
            {
              name: "Semester 7",
              gpa: "9.0",
              image: "https://i.postimg.cc/JzRp8hVk/Chat-GPT-Image-May-4-2025-04-01-38-PM.png",
              subjects: [
                { name: "Project Phase I", score: 93 },
                { name: "Internet of Things", score: 90 },
                { name: "Cybersecurity", score: 88 },
                { name: "Elective I", score: 87 }
              ]
            },
            {
              name: "Semester 8",
              gpa: "9.2",
              image: "https://i.postimg.cc/5yMwmPfC/Chat-GPT-Image-May-4-2025-04-03-19-PM.png",
              subjects: [
                { name: "Project Phase II", score: 95 },
                { name: "Entrepreneurship", score: 90 },
                { name: "Elective II", score: 89 },
                { name: "Seminar", score: 94 }
              ]
            }
          ]
        }
      ]
    }
  };

  const getScoreColor = (score) => {
    if (score >= 95) return "bg-green-500";
    if (score >= 90) return "bg-green-400";
    if (score >= 85) return "bg-green-300";
    if (score >= 80) return "bg-orange-400";
    if (score >= 75) return "bg-orange-300";
    return "bg-red-500";
  };

  const getGpaColor = (gpa) => {
    const gpaNum = parseFloat(gpa);
    if (gpaNum >= 9.5) return "text-green-500";
    if (gpaNum >= 9.0) return "text-green-400";
    if (gpaNum >= 8.5) return "text-green-300";
    if (gpaNum >= 8.0) return "text-orange-400";
    if (gpaNum >= 7.5) return "text-orange-300";
    return "text-red-500";
  };

  // Create a component for the 3D hover effect image
  const Image3DHover = ({ src, alt }) => {
    const [transform, setTransform] = useState('perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)');
    const [transition, setTransition] = useState('transform 0.4s ease');
    const [shadow, setShadow] = useState('0 10px 20px rgba(0,0,0,0.2)');

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = ((x - centerX) / centerX) * 15; // max 15 degrees
      const rotateX = ((centerY - y) / centerY) * 15; // max 15 degrees
      
      setTransform(`perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`);
      setShadow(`0 20px 30px rgba(0,0,0,0.3), 
                 ${rotateY/3}px ${-rotateX/3}px 10px rgba(0,0,0,0.2)`);
    };

    const handleMouseLeave = () => {
      setTransform('perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)');
      setShadow('0 10px 20px rgba(0,0,0,0.2)');
      setTransition('transform 0.6s ease, box-shadow 0.6s ease');
    };

    return (
      <div 
        className="rounded-lg overflow-hidden cursor-pointer relative"
        style={{
          transform,
          transition,
          boxShadow: shadow,
          willChange: 'transform, box-shadow'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          style={{ transition: 'all 0.2s ease' }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/30 opacity-0 hover:opacity-100"
          style={{ transition: 'opacity 0.3s ease' }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      <div className="flex-1 ml-20 p-10">
        <Header />
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Academic Performance" />

          {/* India International School Card */}
          <Card className="mb-8 shadow-md">
            <CardHeader className="flex flex-row items-center space-x-4 bg-primary/5">
              <div className="p-2 bg-primary/10 rounded-full">
                <School size={24} className="text-primary" />
              </div>
              <CardTitle>India International School</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
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
                <div 
                  className="rounded-lg overflow-hidden h-full shadow-md cursor-pointer"
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateY = ((x - centerX) / centerX) * 15;
                    const rotateX = ((centerY - y) / centerY) * 15;
                    
                    card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
                    card.style.boxShadow = `0 20px 30px rgba(0,0,0,0.3), ${rotateY/3}px ${-rotateX/3}px 10px rgba(0,0,0,0.2)`;
                    card.style.transition = 'transform 0.4s ease';
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
                    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                    card.style.transition = 'transform 0.6s ease, box-shadow 0.6s ease';
                  }}
                >
                  <img
                    src="https://i.postimg.cc/MpjjnHrX/Chat-GPT-Image-May-3-2025-05-45-44-PM.png"
                    alt="India International School" 
                    className="w-full h-full object-cover"
                    style={{ transition: 'all 0.2s ease' }}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/30 opacity-0 hover:opacity-100"
                    style={{ transition: 'opacity 0.3s ease' }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 10th Grade Card - Modern Horizontal Style */}
          <Card className="mb-8 shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-6 bg-muted/20">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-3">
                    <BarChart size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">10th Grade</h3>
                </div>
                <div className="space-y-2">
                  <p><strong>School:</strong> {academicData.tenthGrade.school}</p>
                  <p><strong>Year:</strong> {academicData.tenthGrade.year}</p>
                  <p><strong>Overall Score:</strong> {academicData.tenthGrade.score}</p>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
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
                      >
                        <div
                           className={`h-full ${getScoreColor(subject.score)}`}
                          style={{ width: `${subject.score}%`, borderRadius: "inherit" }}
                        />
                      </Progress>
                    </div>
                  ))}
                  
                  <div className="pt-4 mt-6 border-t flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="mr-2 text-primary" size={20} />
                      <span className="font-semibold">Overall GPA:</span>
                    </div>
                    <span className={`text-xl font-bold ${getGpaColor(academicData.tenthGrade.gpa)}`}>
                      {academicData.tenthGrade.gpa}/10.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* 12th Grade Card - Modern Horizontal Style */}
          <Card className="mb-8 shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-6 bg-muted/20">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-3">
                    <BarChart size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">12th Grade</h3>
                </div>
                <div className="space-y-2">
                  <p><strong>School:</strong> {academicData.twelfthGrade.school}</p>
                  <p><strong>Year:</strong> {academicData.twelfthGrade.year}</p>
                  <p><strong>Overall Score:</strong> {academicData.twelfthGrade.score}</p>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
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
                      >
                        <div
                           className={`h-full ${getScoreColor(subject.score)}`}
                          style={{ width: `${subject.score}%`, borderRadius: "inherit" }}
                        />
                      </Progress>
                    </div>
                  ))}
                  
                  <div className="pt-4 mt-6 border-t flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="mr-2 text-primary" size={20} />
                      <span className="font-semibold">Overall GPA:</span>
                    </div>
                    <span className={`text-xl font-bold ${getGpaColor(academicData.twelfthGrade.gpa)}`}>
                      {academicData.twelfthGrade.gpa}/10.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Manipal University Card */}
          <Card className="mb-8 shadow-md">
            <CardHeader className="flex flex-row items-center space-x-4 bg-primary/5">
              <div className="p-2 bg-primary/10 rounded-full">
                <School size={24} className="text-primary" />
              </div>
              <CardTitle>Manipal University, UAE</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-lg font-semibold mb-3">My Journey at Manipal University</h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {academicData.manipalUniversity.description}
                </p>
              </div>
              <div className="col-span-1">
                <div 
                  className="rounded-lg overflow-hidden h-full shadow-md cursor-pointer"
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateY = ((x - centerX) / centerX) * 15;
                    const rotateX = ((centerY - y) / centerY) * 15;
                    
                    card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
                    card.style.boxShadow = `0 20px 30px rgba(0,0,0,0.3), ${rotateY/3}px ${-rotateX/3}px 10px rgba(0,0,0,0.2)`;
                    card.style.transition = 'transform 0.4s ease';
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
                    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                    card.style.transition = 'transform 0.6s ease, box-shadow 0.6s ease';
                  }}
                >
                  <img
                    src="https://i.postimg.cc/V6Y6WWmZ/manipal.png"
                    alt="Manipal University" 
                    className="w-full h-full object-cover"
                    style={{ transition: 'all 0.2s ease' }}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/30 opacity-0 hover:opacity-100"
                    style={{ transition: 'opacity 0.3s ease' }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Manipal University Year Cards - With 3D hover effect on images */}
          {academicData.manipalUniversity.years.map((yearData) => (
            <Card key={yearData.year} className="mb-8 shadow-md overflow-hidden">
              <div className="flex flex-col">
                <div className="p-6 bg-primary/5">
                  <div className="flex items-center">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <GraduationCap size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{yearData.year}</h3>
                  </div>
                </div>

                {/* Semester Cards */}
                {yearData.semesters.map((sem, index) => (
                  <div key={sem.name} className={index > 0 ? "border-t border-border" : ""}>
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 p-6 bg-muted/5">
                        <h4 className="font-semibold text-lg mb-4">{sem.name}</h4>
                        
                        {/* 3D hover effect image */}
                        <div className="mb-4">
                          <Image3DHover src={sem.image} alt={`${sem.name} Image`} />
                        </div>
                      </div>
                      <div className="md:w-3/4 p-6">
                        <div className="space-y-6">
                          {sem.subjects.map((subject) => (
                            <div key={subject.name} className="space-y-2">
                              <div className="flex justify-between">
                                <span className="font-medium">{subject.name}</span>
                                <span className="font-medium">{subject.score}%</span>
                              </div>
                              <Progress
                                value={subject.score}
                                className="h-3"
                                aria-label={`${subject.name} score: ${subject.score}%`}
                              >
                                <div
                                   className={`h-full ${getScoreColor(subject.score)}`}
                                  style={{ width: `${subject.score}%`, borderRadius: "inherit" }}
                                />
                              </Progress>
                            </div>
                          ))}
                          
                          <div className="pt-4 mt-6 border-t flex items-center justify-between">
                            <div className="flex items-center">
                              <Award className="mr-2 text-primary" size={20} />
                              <span className="font-semibold">Semester GPA:</span>
                            </div>
                            <span className={`text-xl font-bold ${getGpaColor(sem.gpa)}`}>
                              {sem.gpa}/10.0
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academic;
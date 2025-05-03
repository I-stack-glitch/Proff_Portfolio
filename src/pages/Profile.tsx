
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Pencil, User, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Designer",
    role: "UI/UX Designer",
    bio: "Passionate designer with over 5 years of experience creating beautiful and functional interfaces.",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileData(prev => ({ ...prev, imageUrl: event.target.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const saveChanges = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      
      <div className="flex-1 ml-20 p-10">
        <Header username={profileData.name.split(' ')[0]} />
        
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="My Profile" 
            action={
              isEditing ? (
                <Button onClick={saveChanges}>
                  <Save size={16} /> Save Changes
                </Button>
              ) : (
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                  <Pencil size={16} /> Edit Profile
                </Button>
              )
            }
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-1">
              <Card className="overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <div className="relative mb-6 group">
                    <Avatar className="w-32 h-32 border-4 border-primary">
                      {profileData.imageUrl ? (
                        <AvatarImage src={profileData.imageUrl} alt={profileData.name} />
                      ) : (
                        <AvatarFallback className="bg-muted text-4xl">
                          <User />
                        </AvatarFallback>
                      )}
                    </Avatar>
                    
                    {isEditing && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <label htmlFor="profile-image" className="cursor-pointer p-2 bg-primary rounded-full">
                          <Pencil size={16} className="text-white" />
                          <input 
                            id="profile-image" 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                  
                  {isEditing ? (
                    <div className="w-full space-y-4">
                      <Input 
                        name="name" 
                        value={profileData.name} 
                        onChange={handleChange} 
                        placeholder="Full Name" 
                      />
                      <Input 
                        name="role" 
                        value={profileData.role} 
                        onChange={handleChange} 
                        placeholder="Role" 
                      />
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold">{profileData.name}</h3>
                      <p className="text-muted-foreground">{profileData.role}</p>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Bio</label>
                      {isEditing ? (
                        <Input 
                          name="bio" 
                          value={profileData.bio} 
                          onChange={handleChange} 
                          className="mt-1" 
                        />
                      ) : (
                        <p>{profileData.bio}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      {isEditing ? (
                        <Input 
                          name="email" 
                          type="email" 
                          value={profileData.email} 
                          onChange={handleChange} 
                          className="mt-1" 
                        />
                      ) : (
                        <p>{profileData.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Phone</label>
                      {isEditing ? (
                        <Input 
                          name="phone" 
                          value={profileData.phone} 
                          onChange={handleChange} 
                          className="mt-1" 
                        />
                      ) : (
                        <p>{profileData.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Location</label>
                      {isEditing ? (
                        <Input 
                          name="location" 
                          value={profileData.location} 
                          onChange={handleChange} 
                          className="mt-1" 
                        />
                      ) : (
                        <p>{profileData.location}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

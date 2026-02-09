'use client'

import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { User, Mail, Phone, MapPin, Calendar, Award, Edit, Save } from 'lucide-react'

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and preferences</p>
        </div>

        {/* Profile Header Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    AJ
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Change Photo
                </Button>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-1">Alex Johnson</h2>
                    <p className="text-muted-foreground mb-3">Web Developer | Learner</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Web Development</Badge>
                      <Badge>Data Entry</Badge>
                      <Badge>Communication</Badge>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>alex.johnson@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>New York, USA</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Joined January 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="skills">Skills & Education</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Johnson" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="alex.johnson@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="New York, USA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    defaultValue="Passionate about web development and always eager to learn new skills. Currently focusing on building accessible websites that make a difference."
                    rows={4}
                  />
                </div>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility Preferences</CardTitle>
                <CardDescription>Configure your accessibility needs and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="disability">Disability Type</Label>
                  <Select defaultValue="visual">
                    <SelectTrigger id="disability">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="visual">Visual Impairment</SelectItem>
                      <SelectItem value="hearing">Hearing Impairment</SelectItem>
                      <SelectItem value="mobility">Mobility Impairment</SelectItem>
                      <SelectItem value="cognitive">Cognitive Disability</SelectItem>
                      <SelectItem value="multiple">Multiple Disabilities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assistive">Assistive Technologies Used</Label>
                  <Input
                    id="assistive"
                    placeholder="e.g., Screen reader, Voice recognition software"
                    defaultValue="JAWS Screen Reader"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accommodations">Preferred Accommodations</Label>
                  <Textarea
                    id="accommodations"
                    placeholder="Describe any specific accommodations you need..."
                    defaultValue="Prefer text-based content with clear headings. Need extra time for video content comprehension."
                    rows={3}
                  />
                </div>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills & Education */}
          <TabsContent value="skills" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>Add and manage your professional skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-sm py-1.5 px-3">
                    HTML/CSS
                    <button className="ml-2 hover:text-destructive">×</button>
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-1.5 px-3">
                    JavaScript
                    <button className="ml-2 hover:text-destructive">×</button>
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-1.5 px-3">
                    Data Entry
                    <button className="ml-2 hover:text-destructive">×</button>
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-1.5 px-3">
                    Microsoft Office
                    <button className="ml-2 hover:text-destructive">×</button>
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-1.5 px-3">
                    Communication
                    <button className="ml-2 hover:text-destructive">×</button>
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Add a new skill..." />
                  <Button>Add Skill</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>Add your educational background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
                        <p className="text-sm text-muted-foreground">State University</p>
                        <p className="text-sm text-muted-foreground">2020 - 2024</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline">Add Education</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>Add your work history and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">Freelance Web Developer</h3>
                        <p className="text-sm text-muted-foreground">Self-Employed</p>
                        <p className="text-sm text-muted-foreground">2024 - Present</p>
                        <p className="text-sm text-foreground mt-2 leading-relaxed">
                          Building accessible websites for small businesses. Specializing in responsive design and
                          user-friendly interfaces.
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline">Add Experience</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates */}
          <TabsContent value="certificates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Certificates</CardTitle>
                <CardDescription>View and download your earned certificates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">Web Development Basics</h3>
                          <p className="text-sm text-muted-foreground mb-2">Completed: January 2026</p>
                          <Badge variant="secondary" className="mb-3">
                            Digital Skills
                          </Badge>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Download
                            </Button>
                            <Button size="sm" variant="outline">
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">Data Entry Professional</h3>
                          <p className="text-sm text-muted-foreground mb-2">Completed: December 2025</p>
                          <Badge variant="secondary" className="mb-3">
                            Digital Skills
                          </Badge>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Download
                            </Button>
                            <Button size="sm" variant="outline">
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

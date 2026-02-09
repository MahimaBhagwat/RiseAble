'use client'

import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, TrendingUp, Award, Clock, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">
            Continue your learning journey and explore new opportunities today.
          </p>
        </div>

        {/* Learning Hours Graph */}
        <Card>
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Learning Hours
                </CardTitle>
                <CardDescription className="mt-1.5">Your daily learning activity over the past 2 weeks</CardDescription>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-foreground">18.5</p>
                <p className="text-sm text-muted-foreground mt-1">hours this week</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Graph container with Y-axis */}
              <div className="flex gap-4">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between h-48 text-xs text-muted-foreground py-1">
                  <span>4h</span>
                  <span>3h</span>
                  <span>2h</span>
                  <span>1h</span>
                  <span>0h</span>
                </div>
                
                {/* Graph */}
                <div className="flex-1 h-48 relative">
                  <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="0" x2="700" y2="0" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" opacity="0.3" />
                    <line x1="0" y1="50" x2="700" y2="50" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" opacity="0.3" />
                    <line x1="0" y1="100" x2="700" y2="100" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" opacity="0.3" />
                    <line x1="0" y1="150" x2="700" y2="150" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" opacity="0.3" />
                    <line x1="0" y1="200" x2="700" y2="200" stroke="currentColor" strokeWidth="2" className="text-border" />
                    
                    {/* Area fill with gradient effect */}
                    <defs>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="currentColor" className="text-primary" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    
                    <polygon
                      points="0,200 50,200 100,150 150,100 200,125 250,200 300,200 350,120 400,80 450,100 500,50 550,70 600,120 650,80 700,80 700,200"
                      fill="url(#areaGradient)"
                    />
                    
                    {/* Line graph */}
                    <polyline
                      points="0,200 50,200 100,150 150,100 200,125 250,200 300,200 350,120 400,80 450,100 500,50 550,70 600,120 650,80 700,80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-primary"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    <circle cx="0" cy="200" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="50" cy="200" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="100" cy="150" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="150" cy="100" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="200" cy="125" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="250" cy="200" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="300" cy="200" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="350" cy="120" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="400" cy="80" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="450" cy="100" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="500" cy="50" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="550" cy="70" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="600" cy="120" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                    <circle cx="650" cy="80" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
                  </svg>
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-muted-foreground pl-10">
                <span className="font-medium">Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
                <span className="font-medium">Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
              
              {/* Legend and stats */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">Daily hours</span>
                  </div>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Average: </span>
                  <span className="font-semibold text-foreground">2.6 hours/day</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <p className="text-3xl font-bold text-foreground mt-1">7 Days</p>
                  <p className="text-xs text-muted-foreground mt-1">Longest: 12 days</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Courses Enrolled</p>
                  <p className="text-3xl font-bold text-foreground mt-1">5</p>
                  <p className="text-xs text-muted-foreground mt-1">3 in progress</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Learning Hours</p>
                  <p className="text-3xl font-bold text-foreground mt-1">24h</p>
                  <p className="text-xs text-muted-foreground mt-1">This month</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Tracker */}
        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
            <CardDescription>Track your overall learning journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Overall Completion</span>
                <span className="text-sm text-muted-foreground">68%</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Courses Completed</p>
                <p className="text-2xl font-bold text-foreground">2</p>
                <Progress value={40} className="h-1.5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Certificates Earned</p>
                <p className="text-2xl font-bold text-foreground">2</p>
                <Progress value={40} className="h-1.5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Job Applications</p>
                <p className="text-2xl font-bold text-foreground">8</p>
                <Progress value={75} className="h-1.5" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Continue Learning */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Continue Learning</h2>
            <Button variant="ghost" asChild>
              <Link href="/dashboard/courses">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="h-52 relative flex-shrink-0">
                <img 
                  src="/images/web-devlopment_basic.png" 
                  alt="Web Development Basics" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 flex flex-col flex-grow">
                <Badge className="mb-2 w-fit" variant="secondary">
                  Digital Skills
                </Badge>
                <h3 className="font-semibold text-lg mb-1 text-foreground">Web Development Basics</h3>
                <p className="text-sm text-muted-foreground mb-3">Learn HTML, CSS, and JavaScript fundamentals</p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-1.5" />
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/dashboard/courses/web-dev-basics">
                    <Play className="mr-2 h-4 w-4" />
                    Continue
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden flex flex-col h-full">
              <div className="h-52 relative flex-shrink-0">
                <img 
                  src="/images/effective_communication.png" 
                  alt="Effective Communication" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 flex flex-col flex-grow">
                <Badge className="mb-2 w-fit" variant="secondary">
                  Communication Skills
                </Badge>
                <h3 className="font-semibold text-lg mb-1 text-foreground">Effective Communication</h3>
                <p className="text-sm text-muted-foreground mb-3">Master professional communication techniques</p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">30%</span>
                  </div>
                  <Progress value={30} className="h-1.5" />
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/dashboard/courses/communication">
                    <Play className="mr-2 h-4 w-4" />
                    Continue
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden flex flex-col h-full">
              <div className="h-52 relative flex-shrink-0">
                <img 
                  src="/images/canva.png" 
                  alt="Digital Marketing Fundamentals" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 flex flex-col flex-grow">
                <Badge className="mb-2 w-fit" variant="secondary">
                  Vocational Skills
                </Badge>
                <h3 className="font-semibold text-lg mb-1 text-foreground">Digital Marketing Fundamentals</h3>
                <p className="text-sm text-muted-foreground mb-3">Learn SEO, social media, and content marketing</p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">10%</span>
                  </div>
                  <Progress value={10} className="h-1.5" />
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/dashboard/courses/digital-marketing">
                    <Play className="mr-2 h-4 w-4" />
                    Continue
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recommended Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Recommended for You</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="flex flex-col md:flex-row gap-4 p-4">
              <div className="w-full md:w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <Badge className="mb-2" variant="outline">
                  New
                </Badge>
                <h3 className="font-semibold text-lg mb-1 text-foreground">Data Entry Mastery</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Master data entry skills with keyboard shortcuts and accuracy techniques
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    4 weeks
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    12 lessons
                  </span>
                </div>
              </div>
              <Button variant="outline" className="self-start bg-transparent">
                Enroll
              </Button>
            </Card>

            <Card className="flex flex-col md:flex-row gap-4 p-4">
              <div className="w-full md:w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <Badge className="mb-2" variant="outline">
                  Popular
                </Badge>
                <h3 className="font-semibold text-lg mb-1 text-foreground">Canva Design Basics</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Create stunning graphics and social media content with Canva
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    3 weeks
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    10 lessons
                  </span>
                </div>
              </div>
              <Button variant="outline" className="self-start bg-transparent">
                Enroll
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

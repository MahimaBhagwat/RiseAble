'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { BookOpen, Clock, Users, Star, Search, Play, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const courses = {
  digital: [
    {
      id: 1,
      title: 'Web Development Basics',
      description: 'Learn HTML, CSS, and JavaScript to build modern websites',
      duration: '6 weeks',
      lessons: 24,
      level: 'Beginner',
      enrolled: 1234,
      rating: 4.8,
      progress: 65,
      status: 'in-progress',
    },
    {
      id: 2,
      title: 'Microsoft Office Mastery',
      description: 'Master Word, Excel, PowerPoint, and Outlook',
      duration: '4 weeks',
      lessons: 16,
      level: 'Beginner',
      enrolled: 2341,
      rating: 4.9,
      progress: 100,
      status: 'completed',
    },
    {
      id: 3,
      title: 'Data Entry Professional',
      description: 'Advanced data entry techniques and accuracy training',
      duration: '3 weeks',
      lessons: 12,
      level: 'Beginner',
      enrolled: 987,
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Google Workspace',
      description: 'Collaborate effectively with Google Docs, Sheets, and Drive',
      duration: '3 weeks',
      lessons: 15,
      level: 'Beginner',
      enrolled: 1567,
      rating: 4.6,
    },
  ],
  vocational: [
    {
      id: 5,
      title: 'Digital Marketing Fundamentals',
      description: 'SEO, social media marketing, and content strategy',
      duration: '8 weeks',
      lessons: 32,
      level: 'Intermediate',
      enrolled: 2100,
      rating: 4.8,
      progress: 30,
      status: 'in-progress',
    },
    {
      id: 6,
      title: 'Graphic Design with Canva',
      description: 'Create stunning graphics for social media and marketing',
      duration: '4 weeks',
      lessons: 18,
      level: 'Beginner',
      enrolled: 1876,
      rating: 4.9,
    },
    {
      id: 7,
      title: 'Photography Basics',
      description: 'Learn photography fundamentals and editing',
      duration: '6 weeks',
      lessons: 20,
      level: 'Beginner',
      enrolled: 945,
      rating: 4.7,
    },
    {
      id: 8,
      title: 'Handmade Crafts Business',
      description: 'Turn your crafting skills into a profitable business',
      duration: '5 weeks',
      lessons: 15,
      level: 'Beginner',
      enrolled: 678,
      rating: 4.6,
    },
  ],
  communication: [
    {
      id: 9,
      title: 'Effective Communication',
      description: 'Professional communication skills for workplace success',
      duration: '4 weeks',
      lessons: 16,
      level: 'Beginner',
      enrolled: 1543,
      rating: 4.8,
      progress: 30,
      status: 'in-progress',
    },
    {
      id: 10,
      title: 'Interview Preparation',
      description: 'Master job interviews with confidence',
      duration: '2 weeks',
      lessons: 8,
      level: 'Beginner',
      enrolled: 2234,
      rating: 4.9,
    },
    {
      id: 11,
      title: 'Business English',
      description: 'Professional English for business communications',
      duration: '6 weeks',
      lessons: 24,
      level: 'Intermediate',
      enrolled: 1098,
      rating: 4.7,
    },
  ],
}

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterLevel, setFilterLevel] = useState('all')

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Courses</h1>
          <p className="text-muted-foreground">Explore accessible courses designed for your success</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterLevel} onValueChange={setFilterLevel}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Tabs */}
        <Tabs defaultValue="digital" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="digital">Digital Skills</TabsTrigger>
            <TabsTrigger value="vocational">Vocational Skills</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
          </TabsList>

          {/* Digital Skills */}
          <TabsContent value="digital" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {courses.digital.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {course.level}
                        </Badge>
                        {course.status === 'completed' && (
                          <Badge variant="outline" className="ml-2 border-primary text-primary">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                        {course.status === 'in-progress' && (
                          <Badge variant="outline" className="ml-2">In Progress</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {course.lessons} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.enrolled}
                      </span>
                    </div>
                    {course.progress !== undefined && (
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-foreground">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-1.5" />
                      </div>
                    )}
                    <Button className="w-full" asChild>
                      <Link href={`/dashboard/courses/${course.id}`}>
                        {course.status === 'in-progress' ? (
                          <>
                            <Play className="mr-2 h-4 w-4" />
                            Continue Learning
                          </>
                        ) : course.status === 'completed' ? (
                          'Review Course'
                        ) : (
                          'Enroll Now'
                        )}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Vocational Skills */}
          <TabsContent value="vocational" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {courses.vocational.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {course.level}
                        </Badge>
                        {course.status === 'in-progress' && (
                          <Badge variant="outline" className="ml-2">In Progress</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {course.lessons} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.enrolled}
                      </span>
                    </div>
                    {course.progress !== undefined && (
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-foreground">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-1.5" />
                      </div>
                    )}
                    <Button className="w-full" asChild>
                      <Link href={`/dashboard/courses/${course.id}`}>
                        {course.status === 'in-progress' ? (
                          <>
                            <Play className="mr-2 h-4 w-4" />
                            Continue Learning
                          </>
                        ) : (
                          'Enroll Now'
                        )}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Communication Skills */}
          <TabsContent value="communication" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {courses.communication.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {course.level}
                        </Badge>
                        {course.status === 'in-progress' && (
                          <Badge variant="outline" className="ml-2">In Progress</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {course.lessons} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.enrolled}
                      </span>
                    </div>
                    {course.progress !== undefined && (
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-foreground">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-1.5" />
                      </div>
                    )}
                    <Button className="w-full" asChild>
                      <Link href={`/dashboard/courses/${course.id}`}>
                        {course.status === 'in-progress' ? (
                          <>
                            <Play className="mr-2 h-4 w-4" />
                            Continue Learning
                          </>
                        ) : (
                          'Enroll Now'
                        )}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

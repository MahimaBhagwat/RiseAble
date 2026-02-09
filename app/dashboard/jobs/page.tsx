'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, DollarSign, Clock, Building2, Search, Briefcase, CheckCircle2 } from 'lucide-react'

const jobs = {
  featured: [
    {
      id: 1,
      title: 'Junior Web Developer',
      company: 'TechFlow Inc.',
      location: 'Remote',
      type: 'Full-time',
      salary: '$40,000 - $55,000',
      posted: '2 days ago',
      description: 'Looking for a junior developer with HTML, CSS, and JavaScript skills',
      accessibility: 'Screen reader compatible workplace',
      applied: false,
    },
    {
      id: 2,
      title: 'Data Entry Specialist',
      company: 'DataPro Solutions',
      location: 'Remote',
      type: 'Part-time',
      salary: '$25,000 - $35,000',
      posted: '1 week ago',
      description: 'Accurate data entry with flexible hours and remote work',
      accessibility: 'Flexible schedule available',
      applied: true,
    },
    {
      id: 3,
      title: 'Customer Support Representative',
      company: 'SupportHub',
      location: 'Hybrid',
      type: 'Full-time',
      salary: '$35,000 - $45,000',
      posted: '3 days ago',
      description: 'Assist customers via chat and email support',
      accessibility: 'Accessible office facilities',
      applied: false,
    },
  ],
  remote: [
    {
      id: 4,
      title: 'Content Writer',
      company: 'ContentCraft',
      location: 'Remote',
      type: 'Freelance',
      salary: '$30/hour',
      posted: '5 days ago',
      description: 'Write engaging blog posts and articles',
      accessibility: 'Fully remote position',
      applied: false,
    },
    {
      id: 5,
      title: 'Virtual Assistant',
      company: 'AssistPro',
      location: 'Remote',
      type: 'Part-time',
      salary: '$20 - $30/hour',
      posted: '1 week ago',
      description: 'Administrative support for busy entrepreneurs',
      accessibility: 'Flexible hours',
      applied: false,
    },
    {
      id: 6,
      title: 'Graphic Designer',
      company: 'DesignStudio',
      location: 'Remote',
      type: 'Full-time',
      salary: '$45,000 - $60,000',
      posted: '4 days ago',
      description: 'Create visual content for marketing campaigns',
      accessibility: 'Work from anywhere',
      applied: false,
    },
  ],
  applied: [
    {
      id: 2,
      title: 'Data Entry Specialist',
      company: 'DataPro Solutions',
      location: 'Remote',
      type: 'Part-time',
      salary: '$25,000 - $35,000',
      posted: '1 week ago',
      description: 'Accurate data entry with flexible hours and remote work',
      accessibility: 'Flexible schedule available',
      applied: true,
      status: 'Under Review',
    },
    {
      id: 7,
      title: 'Social Media Manager',
      company: 'SocialBuzz',
      location: 'Remote',
      type: 'Full-time',
      salary: '$40,000 - $50,000',
      posted: '2 weeks ago',
      description: 'Manage social media accounts and create content',
      accessibility: 'Remote-first company',
      applied: true,
      status: 'Interview Scheduled',
    },
  ],
}

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Job Opportunities</h1>
          <p className="text-muted-foreground">
            Explore inclusive job opportunities from employers who value diverse talent
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Available Jobs</p>
                  <p className="text-3xl font-bold text-foreground mt-1">127</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Applications Sent</p>
                  <p className="text-3xl font-bold text-foreground mt-1">8</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Interview Invites</p>
                  <p className="text-3xl font-bold text-foreground mt-1">3</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search jobs by title, company, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="freelance">Freelance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job Tabs */}
        <Tabs defaultValue="featured" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="featured">Featured Jobs</TabsTrigger>
            <TabsTrigger value="remote">Remote Jobs</TabsTrigger>
            <TabsTrigger value="applied">My Applications</TabsTrigger>
          </TabsList>

          {/* Featured Jobs */}
          <TabsContent value="featured" className="space-y-4">
            {jobs.featured.map((job) => (
              <Card key={job.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground mb-1">{job.title}</h3>
                          <p className="text-muted-foreground mb-3">{job.company}</p>
                          <p className="text-sm text-foreground mb-4 leading-relaxed">{job.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {job.type}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              {job.salary}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline" className="border-primary text-primary">
                              {job.accessibility}
                            </Badge>
                            <span className="text-muted-foreground">• Posted {job.posted}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2">
                      {job.applied ? (
                        <Button variant="outline" disabled className="w-full md:w-auto bg-transparent">
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Applied
                        </Button>
                      ) : (
                        <>
                          <Button className="flex-1 md:flex-none">Apply Now</Button>
                          <Button variant="outline" className="flex-1 md:flex-none bg-transparent">
                            Save
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Remote Jobs */}
          <TabsContent value="remote" className="space-y-4">
            {jobs.remote.map((job) => (
              <Card key={job.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground mb-1">{job.title}</h3>
                          <p className="text-muted-foreground mb-3">{job.company}</p>
                          <p className="text-sm text-foreground mb-4 leading-relaxed">{job.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {job.type}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              {job.salary}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline" className="border-primary text-primary">
                              {job.accessibility}
                            </Badge>
                            <span className="text-muted-foreground">• Posted {job.posted}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2">
                      <Button className="flex-1 md:flex-none">Apply Now</Button>
                      <Button variant="outline" className="flex-1 md:flex-none bg-transparent">
                        Save
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Applied Jobs */}
          <TabsContent value="applied" className="space-y-4">
            {jobs.applied.map((job) => (
              <Card key={job.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg text-foreground">{job.title}</h3>
                            {job.status === 'Interview Scheduled' && (
                              <Badge className="bg-primary">
                                {job.status}
                              </Badge>
                            )}
                            {job.status === 'Under Review' && (
                              <Badge variant="secondary">{job.status}</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-3">{job.company}</p>
                          <p className="text-sm text-foreground mb-4 leading-relaxed">{job.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {job.type}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              {job.salary}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground">Applied {job.posted}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2">
                      <Button variant="outline" className="flex-1 md:flex-none bg-transparent">
                        View Application
                      </Button>
                      {job.status === 'Interview Scheduled' && (
                        <Button className="flex-1 md:flex-none">Schedule Interview</Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

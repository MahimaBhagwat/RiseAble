'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FileText, ExternalLink, Search, CheckCircle2, Calendar, DollarSign } from 'lucide-react'

const schemes = {
  disability: [
    {
      id: 1,
      name: 'Disability Pension Scheme',
      authority: 'Ministry of Social Justice',
      description:
        'Monthly financial assistance for persons with disabilities to support their basic needs and improve quality of life.',
      benefits: 'Monthly pension ranging from $200-$500',
      eligibility: '40% or more disability, income below poverty line',
      deadline: 'Rolling applications',
      status: 'active',
    },
    {
      id: 2,
      name: 'Assistive Device Grant',
      authority: 'Department of Disability Affairs',
      description:
        'Financial support for purchasing assistive devices like wheelchairs, hearing aids, and screen readers.',
      benefits: 'Up to $2,000 for assistive devices',
      eligibility: 'Certified disability, annual income < $30,000',
      deadline: 'June 30, 2026',
      status: 'active',
    },
    {
      id: 3,
      name: 'Medical Reimbursement Program',
      authority: 'Health Ministry',
      description: 'Reimbursement for medical expenses related to disability treatment and rehabilitation.',
      benefits: 'Up to 80% reimbursement on medical bills',
      eligibility: 'Registered disability certificate',
      deadline: 'Rolling applications',
      status: 'active',
    },
  ],
  employment: [
    {
      id: 4,
      name: 'Skill Development Subsidy',
      authority: 'Ministry of Skill Development',
      description:
        'Financial support for specially-abled individuals to pursue skill development courses and certifications.',
      benefits: 'Up to $1,500 for training programs',
      eligibility: 'Ages 18-45, registered disability',
      deadline: 'March 31, 2026',
      status: 'active',
    },
    {
      id: 5,
      name: 'Self-Employment Grant',
      authority: 'Small Business Administration',
      description:
        'Grants and low-interest loans for specially-abled entrepreneurs to start their own businesses.',
      benefits: 'Grants up to $10,000 + loans up to $50,000',
      eligibility: 'Business plan required, disability > 40%',
      deadline: 'December 31, 2026',
      status: 'active',
    },
    {
      id: 6,
      name: 'Workplace Accommodation Fund',
      authority: 'Department of Labor',
      description:
        'Financial assistance to employers for making workplace modifications to accommodate specially-abled employees.',
      benefits: 'Up to $5,000 per employee',
      eligibility: 'Employer-sponsored, documented need',
      deadline: 'Rolling applications',
      status: 'active',
    },
  ],
  education: [
    {
      id: 7,
      name: 'Higher Education Scholarship',
      authority: 'Ministry of Education',
      description:
        'Scholarships for specially-abled students pursuing higher education in colleges and universities.',
      benefits: 'Full tuition waiver + $3,000 annual stipend',
      eligibility: 'Admitted to accredited institution, disability > 40%',
      deadline: 'August 15, 2026',
      status: 'active',
    },
    {
      id: 8,
      name: 'Online Learning Support',
      authority: 'Digital Education Initiative',
      description: 'Free access to online courses and learning platforms for specially-abled individuals.',
      benefits: 'Free premium subscriptions to learning platforms',
      eligibility: 'Registered disability, age 16+',
      deadline: 'Rolling applications',
      status: 'active',
    },
  ],
}

export default function SchemesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterAuthority, setFilterAuthority] = useState('all')

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Government Schemes</h1>
          <p className="text-muted-foreground">
            Discover benefits, grants, and support programs for specially-abled individuals
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Available Schemes</p>
                  <p className="text-3xl font-bold text-foreground mt-1">24</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Applications Submitted</p>
                  <p className="text-3xl font-bold text-foreground mt-1">3</p>
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
                  <p className="text-sm text-muted-foreground">Total Benefits</p>
                  <p className="text-3xl font-bold text-foreground mt-1">$6.5K</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
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
              placeholder="Search schemes by name, benefit, or authority..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterAuthority} onValueChange={setFilterAuthority}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue placeholder="Filter by authority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Authorities</SelectItem>
              <SelectItem value="social">Ministry of Social Justice</SelectItem>
              <SelectItem value="health">Health Ministry</SelectItem>
              <SelectItem value="education">Ministry of Education</SelectItem>
              <SelectItem value="labor">Department of Labor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Schemes Tabs */}
        <Tabs defaultValue="disability" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="disability">Disability Benefits</TabsTrigger>
            <TabsTrigger value="employment">Employment Support</TabsTrigger>
            <TabsTrigger value="education">Education Schemes</TabsTrigger>
          </TabsList>

          {/* Disability Benefits */}
          <TabsContent value="disability" className="space-y-4">
            {schemes.disability.map((scheme) => (
              <Card key={scheme.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{scheme.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Badge variant="secondary">{scheme.authority}</Badge>
                        <Badge
                          variant="outline"
                          className="border-primary text-primary flex items-center gap-1"
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          {scheme.status}
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground leading-relaxed">{scheme.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Benefits</p>
                          <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Eligibility</p>
                          <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Application Deadline</p>
                          <p className="text-sm text-muted-foreground">{scheme.deadline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button>Apply Now</Button>
                    <Button variant="outline">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Employment Support */}
          <TabsContent value="employment" className="space-y-4">
            {schemes.employment.map((scheme) => (
              <Card key={scheme.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{scheme.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Badge variant="secondary">{scheme.authority}</Badge>
                        <Badge
                          variant="outline"
                          className="border-primary text-primary flex items-center gap-1"
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          {scheme.status}
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground leading-relaxed">{scheme.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Benefits</p>
                          <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Eligibility</p>
                          <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Application Deadline</p>
                          <p className="text-sm text-muted-foreground">{scheme.deadline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button>Apply Now</Button>
                    <Button variant="outline">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Education Schemes */}
          <TabsContent value="education" className="space-y-4">
            {schemes.education.map((scheme) => (
              <Card key={scheme.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{scheme.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Badge variant="secondary">{scheme.authority}</Badge>
                        <Badge
                          variant="outline"
                          className="border-primary text-primary flex items-center gap-1"
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          {scheme.status}
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground leading-relaxed">{scheme.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Benefits</p>
                          <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Eligibility</p>
                          <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Application Deadline</p>
                          <p className="text-sm text-muted-foreground">{scheme.deadline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button>Apply Now</Button>
                    <Button variant="outline">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
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

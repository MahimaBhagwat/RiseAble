'use client'

import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { MessageSquare, Heart, Share2, Users, Award, TrendingUp } from 'lucide-react'

const posts = [
  {
    id: 1,
    author: 'Sarah Johnson',
    initials: 'SJ',
    category: 'Success Stories',
    title: 'Just landed my first remote job!',
    content:
      "I'm excited to share that I just got hired as a data entry specialist after completing the Data Entry Professional course on RiseAble. The course helped me improve my accuracy and speed. Thank you to this amazing community for the support!",
    likes: 45,
    comments: 12,
    timeAgo: '2 hours ago',
  },
  {
    id: 2,
    author: 'Michael Chen',
    initials: 'MC',
    category: 'Q&A',
    title: 'Tips for web development interviews?',
    content:
      "I have an interview next week for a junior web developer position. Any tips on what to expect and how to prepare? I've completed the Web Development Basics course and built a few projects.",
    likes: 23,
    comments: 8,
    timeAgo: '5 hours ago',
  },
  {
    id: 3,
    author: 'Priya Patel',
    initials: 'PP',
    category: 'Course Discussion',
    title: 'Loving the Communication Skills course',
    content:
      "The Effective Communication course has been incredibly helpful. The lessons on professional email writing and active listening are practical and easy to apply. Highly recommend for anyone looking to improve their workplace communication!",
    likes: 31,
    comments: 6,
    timeAgo: '1 day ago',
  },
  {
    id: 4,
    author: 'David Williams',
    initials: 'DW',
    category: 'Success Stories',
    title: 'Completed 5 courses in 3 months!',
    content:
      "Setting small daily goals really helped me stay consistent with my learning. I've now completed Web Development, Data Entry, Communication Skills, Canva Design, and Digital Marketing courses. Feeling ready to apply for jobs now!",
    likes: 67,
    comments: 15,
    timeAgo: '2 days ago',
  },
]

const groups = [
  {
    id: 1,
    name: 'Web Developers Unite',
    members: 1234,
    description: 'Community for web development learners and professionals',
  },
  {
    id: 2,
    name: 'Job Search Support',
    members: 2341,
    description: 'Share job opportunities and application tips',
  },
  {
    id: 3,
    name: 'Success Stories',
    members: 3456,
    description: 'Celebrate achievements and inspire others',
  },
  {
    id: 4,
    name: 'Accessibility Champions',
    members: 987,
    description: 'Discuss accessibility tools and best practices',
  },
]

export default function CommunityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Community</h1>
          <p className="text-muted-foreground">
            Connect with peers, share experiences, and learn from others
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Community Members</p>
                  <p className="text-3xl font-bold text-foreground mt-1">12.5K</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Your Posts</p>
                  <p className="text-3xl font-bold text-foreground mt-1">8</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Reputation Points</p>
                  <p className="text-3xl font-bold text-foreground mt-1">245</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Tabs */}
        <Tabs defaultValue="feed" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="feed">Community Feed</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
          </TabsList>

          {/* Feed */}
          <TabsContent value="feed" className="space-y-4">
            {/* Create Post */}
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      YU
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea placeholder="Share your thoughts, achievements, or questions..." className="mb-3" />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                          Success Story
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                          Q&A
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                          Course Discussion
                        </Badge>
                      </div>
                      <Button>Post</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {post.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-foreground">{post.author}</p>
                          <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
                        </div>
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">{post.title}</h3>
                      <p className="text-sm text-foreground mb-4 leading-relaxed">{post.content}</p>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <MessageSquare className="h-4 w-4" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Share2 className="h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Groups */}
          <TabsContent value="groups" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {groups.map((group) => (
                <Card key={group.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1 text-foreground">{group.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {group.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Users className="h-3 w-3" />
                            <span>{group.members.toLocaleString()} members</span>
                          </div>
                          <Button size="sm">Join Group</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Suggested Groups */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Suggested for You</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1 text-foreground">
                          Career Growth Hub
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          Tips and strategies for advancing your career
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Users className="h-3 w-3" />
                            <span>4,567 members</span>
                          </div>
                          <Button size="sm" variant="outline">
                            Join Group
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1 text-foreground">
                          Freelancer Forum
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          Connect with freelancers and share opportunities
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Users className="h-3 w-3" />
                            <span>2,890 members</span>
                          </div>
                          <Button size="sm" variant="outline">
                            Join Group
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, BookOpen, Briefcase, MessageSquare, FileText, Users, Accessibility } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
            <Accessibility className="h-6 w-6 text-primary" />
            <span>RiseAble</span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground">
              Empowering Specially-Abled Individuals Through{' '}
              <span className="text-primary">Skills & Opportunities</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
              Join RiseAble to access inclusive learning, meaningful employment, and a supportive community designed for your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base">
                <Link href="/signup">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                <Link href="#how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RiseAble is dedicated to creating an inclusive digital ecosystem where specially-abled individuals can develop valuable skills, access meaningful employment opportunities, and connect with a supportive community. We believe in equal access to education and career advancement for all.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Inclusive Learning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Accessible courses designed specifically for diverse learning needs and abilities
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Career Opportunities</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Connect with inclusive employers committed to hiring specially-abled talent
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Supportive Community</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Join a network of peers, mentors, and advocates who understand your journey
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How RiseAble Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your journey to success starts here in four simple steps
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Sign Up & Create Profile</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create your account and tell us about your skills, interests, and accessibility needs
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Learn New Skills</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access our curated library of accessible courses in digital skills, vocational training, and more
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Apply for Jobs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Browse inclusive job opportunities and connect with employers who value diverse talent
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Connect & Grow</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Engage with the community, get AI support, and access government schemes for additional assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Platform Features</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to succeed in one accessible platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Accessible Learning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Courses designed with screen readers, captions, and multiple learning formats
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Briefcase className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Job Opportunities</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Vetted inclusive employers offering remote and flexible work options
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <MessageSquare className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">AI Chatbot Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  24/7 AI assistant to answer questions and provide guidance
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Government Schemes</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Easy access to disability benefits, grants, and support programs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Join thousands of specially-abled individuals who are building successful careers with RiseAble
            </p>
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link href="/signup">
                Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg mb-4 text-foreground">
                <Accessibility className="h-5 w-5 text-primary" />
                <span>RiseAble</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering specially-abled individuals through education and opportunity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
                <li><Link href="/jobs" className="hover:text-primary transition-colors">Jobs</Link></li>
                <li><Link href="/community" className="hover:text-primary transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/schemes" className="hover:text-primary transition-colors">Government Schemes</Link></li>
                <li><Link href="/chatbot" className="hover:text-primary transition-colors">AI Support</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} RiseAble. All rights reserved. Building an inclusive future together.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

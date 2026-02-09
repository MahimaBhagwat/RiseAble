'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accessibility, Mic, Fingerprint, Scan, Mail, UserPlus } from 'lucide-react'

export default function SignupPage() {
  const [isRecording, setIsRecording] = useState(false)
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Dynamically load Three.js and Vanta
      const loadScripts = async () => {
        // Load Three.js
        const threeScript = document.createElement('script')
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
        document.body.appendChild(threeScript)

        await new Promise((resolve) => {
          threeScript.onload = resolve
        })

        // Load Vanta Clouds
        const vantaScript = document.createElement('script')
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js'
        document.body.appendChild(vantaScript)

        await new Promise((resolve) => {
          vantaScript.onload = resolve
        })

        // Initialize Vanta effect
        if ((window as any).VANTA) {
          vantaEffect.current = (window as any).VANTA.CLOUDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            skyColor: 0x68b8d7,
            cloudColor: 0xadc1de,
            cloudShadowColor: 0x183550,
            sunColor: 0xff9919,
            sunGlareColor: 0xff6633,
            sunlightColor: 0xff9933,
            speed: 1.2,
          })
        }
      }

      loadScripts()
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }
    }
  }, [])

  const handleVoiceSetup = () => {
    setIsRecording(!isRecording)
    // Voice setup logic would go here
  }

  const handleBiometricSetup = () => {
    // Biometric setup logic would go here
    alert('Biometric setup initiated')
  }

  const handleFaceSetup = () => {
    // Face recognition setup logic would go here
    alert('Face recognition setup initiated')
  }

  return (
    <div ref={vantaRef} className="min-h-screen flex items-center justify-center p-4 py-8 relative">
      <Card className="w-full max-w-md relative z-10 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Accessibility className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">RiseAble</span>
          </div>
          <CardTitle className="text-2xl">Create Your Account</CardTitle>
          <CardDescription>Join RiseAble to start your learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="traditional" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="traditional" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Traditional
              </TabsTrigger>
              <TabsTrigger value="accessible" className="flex items-center gap-2">
                <Accessibility className="h-4 w-4" />
                Accessible
              </TabsTrigger>
            </TabsList>

            {/* Traditional Signup */}
            <TabsContent value="traditional" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a strong password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accessibility">Accessibility Needs (Optional)</Label>
                <Select>
                  <SelectTrigger id="accessibility">
                    <SelectValue placeholder="Select if applicable" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No specific needs</SelectItem>
                    <SelectItem value="visual">Visual Impairment</SelectItem>
                    <SelectItem value="hearing">Hearing Impairment</SelectItem>
                    <SelectItem value="mobility">Mobility Impairment</SelectItem>
                    <SelectItem value="cognitive">Cognitive Disability</SelectItem>
                    <SelectItem value="multiple">Multiple Disabilities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                  I agree to the{' '}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              <Button className="w-full" asChild>
                <Link href="/dashboard">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create Account
                </Link>
              </Button>
            </TabsContent>

            {/* Accessible Signup */}
            <TabsContent value="accessible" className="space-y-4">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Set up your preferred accessible authentication method
                </p>

                {/* Voice Authentication Setup */}
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 flex flex-col items-center gap-2"
                  onClick={handleVoiceSetup}
                >
                  <Mic className={`h-6 w-6 ${isRecording ? 'text-primary animate-pulse' : ''}`} />
                  <div className="text-center">
                    <p className="font-semibold">Voice Authentication</p>
                    <p className="text-xs text-muted-foreground">
                      {isRecording ? 'Recording voice sample...' : 'Set up voice recognition'}
                    </p>
                  </div>
                </Button>

                {/* Biometric Setup */}
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 flex flex-col items-center gap-2"
                  onClick={handleBiometricSetup}
                >
                  <Fingerprint className="h-6 w-6" />
                  <div className="text-center">
                    <p className="font-semibold">Biometric Authentication</p>
                    <p className="text-xs text-muted-foreground">Register fingerprint or touch ID</p>
                  </div>
                </Button>

                {/* Face Recognition Setup */}
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 flex flex-col items-center gap-2"
                  onClick={handleFaceSetup}
                >
                  <Scan className="h-6 w-6" />
                  <div className="text-center">
                    <p className="font-semibold">Face Recognition</p>
                    <p className="text-xs text-muted-foreground">Set up facial recognition</p>
                  </div>
                </Button>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    By signing up, you agree to our{' '}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

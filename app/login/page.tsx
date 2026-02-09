'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accessibility, Mic, Fingerprint, Scan, Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  const [isListening, setIsListening] = useState(false)
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

  const handleVoiceLogin = () => {
    setIsListening(!isListening)
    // Voice recognition logic would go here
  }

  const handleBiometricLogin = () => {
    // Biometric authentication logic would go here
    alert('Biometric authentication initiated')
  }

  const handleFaceRecognition = () => {
    // Face recognition logic would go here
    alert('Face recognition initiated')
  }

  return (
    <div ref={vantaRef} className="min-h-screen flex items-center justify-center p-4 relative">
      <Card className="w-full max-w-md relative z-10 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Accessibility className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">RiseAble</span>
          </div>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Login to continue your learning journey</CardDescription>
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

            {/* Traditional Login */}
            <TabsContent value="traditional" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm cursor-pointer">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Button className="w-full" asChild>
                <Link href="/dashboard">
                  <Lock className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
            </TabsContent>

            {/* Accessible Login */}
            <TabsContent value="accessible" className="space-y-4">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Choose your preferred accessible login method
                </p>

                {/* Voice Login */}
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 flex flex-col items-center gap-2"
                  onClick={handleVoiceLogin}
                >
                  <Mic className={`h-6 w-6 ${isListening ? 'text-primary animate-pulse' : ''}`} />
                  <div className="text-center">
                    <p className="font-semibold">Voice Login</p>
                    <p className="text-xs text-muted-foreground">
                      {isListening ? 'Listening...' : 'Speak your credentials'}
                    </p>
                  </div>
                </Button>

                {/* Biometric Login */}
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 flex flex-col items-center gap-2"
                  onClick={handleBiometricLogin}
                >
                  <Fingerprint className="h-6 w-6" />
                  <div className="text-center">
                    <p className="font-semibold">Biometric Login</p>
                    <p className="text-xs text-muted-foreground">Use fingerprint or touch ID</p>
                  </div>
                </Button>

                {/* Face Recognition */}
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 flex flex-col items-center gap-2"
                  onClick={handleFaceRecognition}
                >
                  <Scan className="h-6 w-6" />
                  <div className="text-center">
                    <p className="font-semibold">Face Recognition</p>
                    <p className="text-xs text-muted-foreground">Login with facial recognition</p>
                  </div>
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center text-sm text-muted-foreground mt-6">
            {"Don't have an account? "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

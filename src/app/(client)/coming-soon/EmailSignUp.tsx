"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, FormEvent } from "react"
import { Mail } from "lucide-react"

export default function EmailSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault()
    if (!email) return
    const subject = encodeURIComponent("Early Access Request")
    const body = encodeURIComponent(
      `Hello,\n\nI’d like to join MechAfrica early access.\n\nMy email is: ${email}\n`
    )
    window.location.href = `mailto:admin@mechafrica.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-24 bg-gray-200 to-muted/10 relative">
      <div className="container mx-auto px-4 text-center">
        {/* Tagline badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-8 font-sans">
          <Mail className="h-4 w-4 text-accent" />
          <span className="text-accent font-medium text-sm tracking-wide">
            STAY UPDATED
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
          Be Part of the Future
          <span className="block text-accent">Get Early Access</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
          Sign up today to receive exclusive updates, launch details, and early access
          opportunities with <span className="font-semibold">MechAfrica</span>.
        </p>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-2xl shadow-xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              required
              aria-label="Email address"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background text-foreground placeholder:text-muted-foreground border border-border rounded-xl text-lg py-6 font-sans focus-visible:ring-2 focus-visible:ring-accent/40 flex-1"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-green-700 cursor-pointer text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg font-sans transition-all hover:scale-105"
            >
              Join Now
            </Button>
          </div>
          <p className="text-sm mt-4 font-sans text-muted-foreground">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  )
}

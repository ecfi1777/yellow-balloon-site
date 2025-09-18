"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Simple SVG icon components to replace lucide-react
const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const Scissors = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="6" cy="6" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="6" cy="18" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="20" y1="4" x2="8.12" y2="15.88" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="14.47" y1="14.48" x2="20" y2="20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="8.12" y1="8.12" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const Camera = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z"
    />
    <circle cx="12" cy="13" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3l1.5 1.5L5 6 3.5 4.5 5 3zM12 12l1.5 1.5L12 15l-1.5-1.5L12 12zM19 3l1.5 1.5L19 6l-1.5-1.5L19 3zM5 21l1.5-1.5L5 18l-1.5 1.5L5 21zM19 21l1.5-1.5L19 18l-1.5 1.5L19 21z"
    />
  </svg>
)

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <polygon
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="9,18 15,12 9,6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

// ----------
// Helper bits
// ----------
const Section = ({
  id,
  title,
  eyebrow,
  children,
}: { id: string; title: string; eyebrow?: string; children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(id)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [id])

  return (
    <section id={id} className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          {eyebrow && (
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 animate-bounce-gentle">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-primary via-coral-accent to-mint-accent bg-clip-text text-transparent leading-tight">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}

// ----------
// Main page
// ----------
export default function YellowBalloonLanding() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    setHeroLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-primary/40 to-[#ff6b9d]/30 blur-3xl animate-float" />
        <div
          className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-[#4ecdc4]/40 to-[#a8e6cf]/30 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-800 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 animate-bounce-gentle">
              Kids Hair Salon
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Where every haircut ends with a smile, a{" "}
              <span className="bg-gradient-to-r from-primary to-[#ffb347] bg-clip-text text-transparent">balloon</span>,
              and a{" "}
              <span className="bg-gradient-to-r from-[#ff6b9d] to-[#4ecdc4] bg-clip-text text-transparent">
                lollipop
              </span>
              !
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-prose leading-relaxed">
              Serving Gaithersburg, Darnestown, Potomac, Germantown & surrounding Montgomery County for over 20 years.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-slate-800 text-white hover:bg-slate-900 border-0 font-bold text-lg px-8"
              >
                <a href="tel:3015696756">
                  <Phone className="mr-2 h-5 w-5" />
                  Call to Book Appointment
                </a>
              </Button>
              <Button variant="secondary" asChild size="lg" className="font-semibold text-lg px-8">
                <a href="#pricing">
                  See Pricing <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 font-medium">
                <Clock className="h-4 w-4 text-primary" /> Mon–Fri 10–6, Sat 9–4
              </span>
              <span className="inline-flex items-center gap-2 font-medium">
                <MapPin className="h-4 w-4 text-[#ff6b9d]" /> 255 Market Street West, Gaithersburg, MD
              </span>
            </div>
          </div>

          <div
            className={`relative transition-all duration-800 delay-200 ${heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="aspect-[4/3] rounded-3xl shadow-2xl glossy-card p-3">
              <div className="h-full w-full rounded-2xl overflow-hidden grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[url('/happy-child-getting-haircut-at-salon-with-stylist.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-500" />
                <div className="grid grid-rows-2 gap-3">
                  <div className="rounded-xl bg-[url('/toddler-boy-getting-first-haircut-with-balloon.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-500" />
                  <div className="rounded-xl bg-[url('/little-girl-getting-hair-styled-at-kids-salon.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rotate-[-8deg] animate-bounce-gentle">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#ffb347] px-4 py-2 text-sm font-bold text-foreground shadow-lg">
                <Sparkles className="h-4 w-4" /> First‑Haircut Friendly
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* About */}
      <Section id="about" title="Made for kids. Loved by parents." eyebrow="About">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 20 years, we've been Montgomery County's trusted kids hair salon, serving families in Gaithersburg,
            Darnestown, Potomac, Germantown, and surrounding areas. We specialize in creating positive experiences that
            build confidence and make every child feel special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: Scissors,
              title: "Gentle Stylists",
              text: "Experienced with wiggly clients, first-cut jitters, and children of all ages.",
              color: "#ff6b9d",
            },
            {
              icon: Camera,
              title: "Fun Waiting Area",
              text: "Toys, coloring books, and rides to keep kids entertained while waiting.",
              color: "#4ecdc4",
            },
            {
              icon: Sparkles,
              title: "TVs at Every Station",
              text: "Cartoons and shows to keep children distracted and comfortable during cuts.",
              color: "#a8e6cf",
            },
            {
              icon: Star,
              title: "Special Rewards",
              text: "Every child leaves with a balloon and lollipop - it's our signature touch!",
              color: "#ffb347",
            },
          ].map((f, i) => (
            <Card key={i} className="rounded-3xl glossy-card hover:scale-105 transition-all duration-300 group">
              <CardHeader className="pb-3">
                <CardTitle className="flex flex-col items-center gap-3 text-lg font-bold text-center">
                  <div
                    className="p-3 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: `${f.color}20` }}
                  >
                    <f.icon className="h-6 w-6" style={{ color: f.color }} />
                  </div>
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed text-center text-sm">{f.text}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="Complete Hair Services for Kids" eyebrow="What we do">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Kids Haircuts",
              desc: "Professional cuts for ages 1-17. Fun, fast, and gentle with experienced stylists.",
              badge: "Most Popular",
              color: "#ffd84d",
              price: "$25-35",
            },
            {
              title: "Baby's First Haircut",
              desc: "Special milestone service includes certificate and keepsake lock of hair.",
              badge: "Keepsake",
              color: "#ff6b9d",
              price: "$30",
            },
            {
              title: "Lice Treatment",
              desc: "Private, confidential screening and treatment. Results accepted by schools.",
              badge: "Confidential",
              color: "#4ecdc4",
              price: "$25-85",
            },
            {
              title: "Glamour Parties",
              desc: "Confidence-boosting styling parties perfect for achievements and special celebrations.",
              badge: "Fun",
              color: "#a8e6cf",
              price: "$35/child",
            },
            {
              title: "Specialty Styles",
              desc: "Braids, up-dos, nail polish, and glitter for special occasions.",
              badge: "Special",
              color: "#ffb347",
              price: "$8-45",
            },
            {
              title: "Adult Cuts",
              desc: "For parents accompanying children - convenient family service.",
              badge: "Family",
              color: "#ffd84d",
              price: "$40",
            },
          ].map((s, i) => (
            <Card key={i} className="rounded-3xl glossy-card hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold">{s.title}</CardTitle>
                  <span
                    className="text-xs text-foreground px-3 py-1 rounded-full font-semibold border"
                    style={{ backgroundColor: `${s.color}20`, borderColor: `${s.color}30` }}
                  >
                    {s.badge}
                  </span>
                </div>
                <div className="text-2xl font-black bg-gradient-to-r from-primary to-[#ff6b9d] bg-clip-text text-transparent">
                  {s.price}
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="Transparent Pricing" eyebrow="Pricing">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary to-[#ff6b9d]">
                <tr>
                  <th className="px-6 py-4 text-left text-foreground font-bold">Service</th>
                  <th className="px-6 py-4 text-left text-foreground font-bold">Price</th>
                  <th className="px-6 py-4 text-left text-foreground font-bold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    service: "Baby's First Haircut",
                    price: "$30",
                    notes: "Includes certificate & keepsake lock of hair",
                  },
                  { service: "Boys Haircut (2-10 years)", price: "$25", notes: "Includes wash, cut, and styling" },
                  { service: "Girls Haircut (2-10 years)", price: "$28", notes: "Includes wash, cut, and styling" },
                  { service: "Teen Boys (11-17 years)", price: "$30", notes: "Modern styles and trends" },
                  { service: "Teen Girls (11-17 years)", price: "$35", notes: "Includes styling consultation" },
                  { service: "Adult Haircut", price: "$40", notes: "For parents accompanying children" },
                  { service: "Simple Braid", price: "$15", notes: "French braid, side braid" },
                  { service: "Fancy Up-Do", price: "$45", notes: "Special occasions, parties" },
                  { service: "Nail Polish", price: "$8", notes: "Fun colors available" },
                  { service: "Glitter Hair Spray", price: "$5", notes: "Temporary sparkle" },
                  { service: "Lice Screening", price: "$25", notes: "Private, confidential service" },
                  { service: "Lice Treatment", price: "$85/hour", notes: "Thorough removal process" },
                  { service: "Glamour Party (per child)", price: "$35", notes: "Minimum 4 children" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">{row.service}</td>
                    <td className="px-6 py-4 text-foreground font-bold">{row.price}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-muted-foreground text-sm italic">
                    All services include balloon and lollipop. Prices subject to change.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="rounded-3xl glossy-card hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">🔒</span>
                Lice Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Private, confidential lice screening and treatment in a separate area. We understand this can be
                stressful - we're here to help with compassion and expertise.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Results accepted by local schools</li>
                <li>• Kid-friendly, gentle approach</li>
                <li>• Official documentation provided</li>
                <li>• Completely confidential service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl glossy-card hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">✨</span>
                Glamour Parties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Confidence-boosting styling experiences perfect for achievements and special celebrations. Every child
                feels like a star!
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Styling, nail polish, glitter included</li>
                <li>• Photos and balloon for each child</li>
                <li>• Minimum 4 children required</li>
                <li>• Perfect for school milestones</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery" title="Happy cuts, happy kids" eyebrow="Gallery">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/smiling-child-getting-haircut-at-yellow-balloon-sa.jpg",
            "/toddler-boy-in-salon-chair-getting-first-haircut-w.jpg",
            "/little-girl-getting-braids-done-at-kids-hair-salon.jpg",
            "/child-watching-cartoons-while-getting-haircut-with.jpg",
            "/happy-kids-at-glamour-party-getting-hair-styled-wi.jpg",
            "/child-leaving-salon-with-new-haircut-holding-ballo.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div
                className="h-full w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section id="reviews" title="Parents give us 5 stars" eyebrow="Reviews">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "They handled my toddler like pros—zero tears!",
            "So clean and friendly. We'll be back.",
            "Quick, cute, and affordable. Love the balloon!",
          ].map((t, i) => (
            <Card key={i} className="rounded-3xl glossy-card hover:scale-105 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground font-medium leading-relaxed">"{t}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Visit Us Today" eyebrow="Contact">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Card className="rounded-3xl glossy-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Call or message us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-foreground mb-8">
                <p className="flex items-center gap-3 font-medium">
                  <Phone className="h-5 w-5 text-primary" /> (301) 569-6756
                </p>
                <p className="flex items-center gap-3 font-medium">
                  <MapPin className="h-5 w-5" style={{ color: "#ff6b9d" }} /> 255 Market Street West, Gaithersburg, MD
                  20878
                </p>
                <p className="flex items-center gap-3 font-medium">
                  <Clock className="h-5 w-5" style={{ color: "#4ecdc4" }} /> Tue–Fri 10am–6pm • Sat–Sun 10am–5pm
                </p>
                <p className="text-sm text-muted-foreground">Closed Mondays & Thursdays</p>
              </div>

              <div className="mb-8 p-4 bg-primary/10 rounded-xl">
                <h4 className="font-bold text-foreground mb-2">Service Areas</h4>
                <p className="text-sm text-muted-foreground">
                  Proudly serving Montgomery County families in Gaithersburg, Darnestown, Potomac, Germantown, and
                  surrounding areas.
                </p>
              </div>

              <form className="space-y-4">
                <Input placeholder="Parent name" className="rounded-xl" />
                <Input placeholder="Phone or email" className="rounded-xl" />
                <Textarea placeholder="Tell us about the haircut (age, style, best time)" className="rounded-xl" />
                <Button className="w-full bg-slate-800 text-white hover:bg-slate-900 border-0 font-bold text-lg py-3 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call to Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="rounded-3xl p-8 bg-gradient-to-br from-primary/20 via-[#ff6b9d]/10 to-[#4ecdc4]/20 glossy-card">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-[#ff6b9d] bg-clip-text text-transparent">
              The Yellow Balloon Experience
            </h3>
            <ul className="space-y-3 text-foreground font-medium">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                20+ years serving Montgomery County families
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#ff6b9d" }} className="text-xl">
                  •
                </span>
                Fun waiting area with toys, coloring books, and rides
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#4ecdc4" }} className="text-xl">
                  •
                </span>
                TVs at every station for entertainment
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#a8e6cf" }} className="text-xl">
                  •
                </span>
                Gentle stylists specializing in children
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#ffb347" }} className="text-xl">
                  •
                </span>
                Balloon & lollipop with every cut 🎈🍭
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                Easy parking and accessible location
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 md:px-8 glossy-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} The Yellow Balloon. All rights reserved.
          </p>
          <div className="flex md:justify-end gap-6 text-sm font-semibold">
            <a href="#about" className="hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#services" className="hover:text-[#ff6b9d] transition-colors duration-300">
              Services
            </a>
            <a href="#pricing" className="hover:text-[#4ecdc4] transition-colors duration-300">
              Pricing
            </a>
            <a href="#contact" className="hover:text-[#a8e6cf] transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Simple SVG icon components
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

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 21v-2a4 4 0 00-3-3.87" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3.13a4 4 0 010 7.75" />
  </svg>
)

const Gift = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="20,12 20,22 4,22 4,12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <rect width="20" height="5" x="2" y="7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="12" y1="22" x2="12" y2="7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
  </svg>
)

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
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

export default function GlamourPartiesPage() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    setHeroLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      {/* Hero Section */}
      <section id="overview" className="max-w-6xl mx-auto px-4 md:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div
          className={`transition-all duration-800 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 animate-bounce-gentle">
            Glamour Parties
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Confidence-building{" "}
            <span className="bg-gradient-to-r from-lavender-accent to-peach-accent bg-clip-text text-transparent">
              glamour
            </span>{" "}
            experiences
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose leading-relaxed">
            Every child feels like a star with professional styling, nail polish, glitter, and photos to remember the
            day!
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-slate-800 text-white hover:bg-slate-900 border-0 font-bold text-lg px-8"
            >
              <a href="tel:3015696756">
                <Phone className="mr-2 h-5 w-5" />
                Call (301) 569-6756
              </a>
            </Button>
            <Button variant="secondary" asChild size="lg" className="font-semibold text-lg px-8">
              <a href="/#contact">Book Party</a>
            </Button>
          </div>
        </div>

        <div
          className={`relative transition-all duration-800 delay-200 ${heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="aspect-[4/3] rounded-3xl shadow-2xl glossy-card p-3">
            <div className="h-full w-full rounded-2xl overflow-hidden">
              <div className="rounded-xl bg-[url('/happy-kids-at-glamour-party-getting-hair-styled-wi.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-500 h-full" />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 rotate-[8deg] animate-bounce-gentle">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lavender-accent to-peach-accent px-4 py-2 text-sm font-bold text-foreground shadow-lg">
              <Sparkles className="h-4 w-4" /> Every Child Feels Special
            </span>
          </div>
        </div>
      </section>

      {/* Comprehensive Packages Section */}
      <section id="packages" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 animate-bounce-gentle">
            Party Packages
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-lavender-accent via-peach-accent to-primary bg-clip-text text-transparent leading-tight">
            What's Included
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-16">
          <Card className="rounded-3xl glossy-card hover:scale-105 transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl font-bold">Glamour Party Experience</CardTitle>
                <span className="text-xs bg-peach-accent/20 text-foreground px-3 py-1 rounded-full font-semibold border border-peach-accent/30">
                  Popular
                </span>
              </div>
              <div className="text-3xl font-black bg-gradient-to-r from-lavender-accent to-peach-accent bg-clip-text text-transparent">
                $35 per child
              </div>
              <p className="text-sm text-muted-foreground">Minimum 4 children required</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every child gets the full glamour treatment with professional styling, nail polish, glitter, and photos
                to remember their special day.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-lavender-accent" />
                  Professional hair styling and up-dos
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-peach-accent" />
                  Fun nail polish application
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-lavender-accent" />
                  Glitter hair spray and accessories
                </li>
                <li className="flex items-center gap-2">
                  <Camera className="h-4 w-4 text-peach-accent" />
                  Photo opportunities and memories
                </li>
                <li className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-lavender-accent" />
                  Balloon and lollipop for each child
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-peach-accent" />
                  Perfect for groups and celebrations
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-lavender-accent via-peach-accent to-primary bg-clip-text text-transparent leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              question: "How many children can participate?",
              answer:
                "We require a minimum of 4 children for glamour parties. We can accommodate larger groups - just let us know when booking!",
            },
            {
              question: "How long does a glamour party last?",
              answer: "Parties typically last 1.5-2 hours, depending on the size of your group and services selected.",
            },
            {
              question: "What ages are appropriate for glamour parties?",
              answer:
                "Our glamour parties are perfect for children ages 4-17. We tailor the experience to be age-appropriate for your group.",
            },
            {
              question: "Do you provide everything needed?",
              answer:
                "Yes! We provide all styling tools, nail polish, glitter, accessories, and take care of cleanup. You just bring the kids!",
            },
            {
              question: "Can parents stay during the party?",
              answer:
                "Parents are welcome to stay and watch. We also encourage taking photos of the glamour transformations.",
            },
            {
              question: "How far in advance should I book?",
              answer:
                "We recommend booking 2-3 weeks in advance, especially for weekend parties. Call us to check availability!",
            },
          ].map((faq, i) => (
            <Card key={i} className="rounded-3xl glossy-card">
              <CardHeader>
                <CardTitle className="text-lg font-bold">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <Card className="rounded-3xl glossy-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Service Area</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground leading-relaxed mb-4">
              We proudly serve families throughout Montgomery County, Maryland and surrounding areas.
            </p>
            <p className="text-sm text-muted-foreground">
              Located in Gaithersburg, we're convenient to Rockville, Germantown, Damascus, and beyond.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Enhanced Call to Action Section */}
      <section id="book-now" className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <div className="rounded-3xl p-12 bg-gradient-to-br from-lavender-accent/20 via-peach-accent/10 to-primary/20 glossy-card">
          <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-lavender-accent to-peach-accent bg-clip-text text-transparent">
            Ready to Plan Your Glamour Party?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Give your child and their friends an unforgettable confidence-building experience. Call us today to book
            your glamour party!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-slate-800 text-white hover:bg-slate-900 border-0 font-bold text-lg px-8"
            >
              <a href="tel:3015696756">
                <Phone className="mr-2 h-5 w-5" />
                Call (301) 569-6756
              </a>
            </Button>
            <Button variant="secondary" asChild size="lg" className="font-semibold text-lg px-8">
              <a href="/#contact">Book Party Online</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

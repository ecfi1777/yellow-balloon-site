"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

const Scissors = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="6" cy="6" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="6" cy="18" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="20" y1="4" x2="8.12" y2="15.88" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="14.47" y1="14.48" x2="20" y2="20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="8.12" y1="8.12" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
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

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
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

export default function HaircutsPage() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    setHeroLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-primary/40 to-coral-accent/30 blur-3xl animate-float" />
        <div
          className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-mint-accent/40 to-lavender-accent/30 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-800 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 animate-bounce-gentle">
              Kids Haircuts
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-primary to-peach-accent bg-clip-text text-transparent">
                haircuts
              </span>{" "}
              for kids of all ages
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-prose leading-relaxed">
              From baby's first haircut to teen styles, our experienced stylists make every visit fun and stress-free.
              Quick, gentle, and always ending with a smile!
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
                <a href="/#contact">Book Appointment</a>
              </Button>
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
          </div>
        </section>
      </div>

      {/* Haircut Services */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 animate-bounce-gentle">
            Our Services
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-primary via-coral-accent to-mint-accent bg-clip-text text-transparent leading-tight">
            Haircut Options
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Baby's First Haircut",
              price: "$30",
              desc: "A special milestone service that includes a keepsake certificate and lock of hair. Gentle and patient approach for nervous little ones.",
              features: ["Certificate included", "Keepsake lock of hair", "Extra gentle approach", "Photo opportunity"],
              badge: "Special",
              color: "coral-accent",
            },
            {
              title: "Boys Haircut (2-10)",
              price: "$25",
              desc: "Classic and trendy cuts for young boys. Includes wash, cut, and styling with cartoons to keep them entertained.",
              features: ["Wash included", "Age-appropriate styles", "TV entertainment", "Quick service"],
              badge: "Popular",
              color: "primary",
            },
            {
              title: "Girls Haircut (2-10)",
              price: "$28",
              desc: "Beautiful cuts and trims for little girls. Includes wash, cut, and basic styling with fun conversation.",
              features: ["Wash included", "Styling consultation", "Gentle approach", "Fun atmosphere"],
              badge: "Popular",
              color: "mint-accent",
            },
            {
              title: "Teen Boys (11-17)",
              price: "$30",
              desc: "Modern styles and trends for teenage boys. We stay current with popular cuts and techniques.",
              features: ["Trendy styles", "Style consultation", "Modern techniques", "Age-appropriate"],
              badge: "Trendy",
              color: "lavender-accent",
            },
            {
              title: "Teen Girls (11-17)",
              price: "$35",
              desc: "Stylish cuts with consultation for teenage girls. Includes discussion of style preferences and maintenance.",
              features: ["Style consultation", "Trend awareness", "Maintenance tips", "Confidence building"],
              badge: "Stylish",
              color: "peach-accent",
            },
            {
              title: "Adult Cuts",
              price: "$40",
              desc: "Convenient haircuts for parents accompanying their children. Professional service while your child gets their cut.",
              features: ["Professional service", "Convenient timing", "Family-friendly", "Quality results"],
              badge: "Family",
              color: "primary",
            },
          ].map((service, i) => (
            <Card key={i} className="rounded-3xl glossy-card hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <span
                    className={`text-xs bg-${service.color}/20 text-foreground px-3 py-1 rounded-full font-semibold border border-${service.color}/30`}
                  >
                    {service.badge}
                  </span>
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-primary to-coral-accent bg-clip-text text-transparent">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className={`text-${service.color} text-xs`}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-primary via-coral-accent to-mint-accent bg-clip-text text-transparent leading-tight">
            Why Parents Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Scissors,
              title: "Expert Stylists",
              text: "20+ years of experience with children of all ages and temperaments.",
              color: "coral-accent",
            },
            {
              icon: Heart,
              title: "Gentle Approach",
              text: "Patient, understanding, and skilled at working with nervous or wiggly children.",
              color: "mint-accent",
            },
            {
              icon: Clock,
              title: "Quick Service",
              text: "Efficient cuts that don't keep busy families waiting longer than necessary.",
              color: "lavender-accent",
            },
            {
              icon: Star,
              title: "Happy Endings",
              text: "Every child leaves with a balloon, lollipop, and a smile on their face.",
              color: "peach-accent",
            },
          ].map((feature, i) => (
            <Card key={i} className="rounded-3xl glossy-card hover:scale-105 transition-all duration-300 group">
              <CardHeader className="pb-3">
                <CardTitle className="flex flex-col items-center gap-3 text-lg font-bold text-center">
                  <div
                    className={`p-3 rounded-full bg-${feature.color}/20 group-hover:bg-${feature.color}/30 transition-colors duration-300`}
                  >
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed text-center text-sm">
                {feature.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <div className="rounded-3xl p-12 bg-gradient-to-br from-primary/20 via-coral-accent/10 to-mint-accent/20 glossy-card">
          <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-primary to-coral-accent bg-clip-text text-transparent">
            Ready for a Great Haircut?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Call us today to schedule your child's haircut. We're here Tuesday through Sunday, ready to make your visit
            fun and stress-free.
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
              <a href="/#contact">Send Message</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

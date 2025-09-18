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

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const Lock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect
      width="18"
      height="11"
      x="3"
      y="11"
      rx="2"
      ry="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
)

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
    />
    <polyline points="14,2 14,8 20,8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline points="10,9 9,9 8,9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
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

export default function LiceScreeningPage() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    setHeroLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-mint-accent/40 to-primary/30 blur-3xl animate-float" />
        <div
          className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-coral-accent/40 to-mint-accent/30 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        {/* Hero Section */}
        <section id="overview" className="max-w-6xl mx-auto px-4 md:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-800 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 animate-bounce-gentle">
              Lice Services
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Confidential{" "}
              <span className="bg-gradient-to-r from-mint-accent to-primary bg-clip-text text-transparent">
                lice screening
              </span>{" "}
              & treatment
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-prose leading-relaxed">
              Private, professional lice screening and treatment services. We understand this can be stressful - we're
              here to help with compassion, expertise, and complete confidentiality.
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
                <a href="tel:3015696756">Call to Book Appointment</a>
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-800 delay-200 ${heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/professional-healthcare-worker-examining-child-s-h.jpg"
                alt="Professional lice screening examination"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rotate-[-8deg] animate-bounce-gentle">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-mint-accent to-primary px-4 py-2 text-sm font-bold text-foreground shadow-lg">
                <Shield className="h-4 w-4" /> School-Accepted Results
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Services */}
      <section id="pricing" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 animate-bounce-gentle">
            Our Services
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-mint-accent via-primary to-coral-accent bg-clip-text text-transparent leading-tight">
            Lice Services Available
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-3xl glossy-card hover:scale-105 transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl font-bold">Lice Screening</CardTitle>
                <span className="text-xs bg-mint-accent/20 text-foreground px-3 py-1 rounded-full font-semibold border border-mint-accent/30">
                  Quick
                </span>
              </div>
              <div className="text-3xl font-black bg-gradient-to-r from-mint-accent to-primary bg-clip-text text-transparent">
                $25
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Professional head check to determine if lice or nits are present. Results accepted by local schools and
                camps.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-mint-accent" />
                  Thorough professional examination
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Official documentation provided
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-coral-accent" />
                  Quick 15-minute appointment
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-mint-accent" />
                  Completely confidential service
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl glossy-card hover:scale-105 transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl font-bold">Lice Treatment</CardTitle>
                <span className="text-xs bg-primary/20 text-foreground px-3 py-1 rounded-full font-semibold border border-primary/30">
                  Thorough
                </span>
              </div>
              <div className="text-3xl font-black bg-gradient-to-r from-primary to-coral-accent bg-clip-text text-transparent">
                $85/hour
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Complete lice and nit removal service using safe, effective methods. Kid-friendly approach with patience
                and care.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  Gentle, kid-friendly approach
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-coral-accent" />
                  Safe, effective removal methods
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-mint-accent" />
                  Follow-up documentation
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  Private treatment area
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-mint-accent via-primary to-coral-accent bg-clip-text text-transparent leading-tight">
            Why Parents Trust Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Lock,
              title: "100% Confidential",
              text: "Private screening area separate from main salon. Your privacy is our priority.",
              color: "mint-accent",
            },
            {
              icon: Shield,
              title: "School Accepted",
              text: "Our documentation is accepted by Montgomery County schools and camps.",
              color: "primary",
            },
            {
              icon: Heart,
              title: "Kid-Friendly",
              text: "Gentle, patient approach that reduces stress for both children and parents.",
              color: "coral-accent",
            },
            {
              icon: Clock,
              title: "Quick Service",
              text: "Fast screening appointments and efficient treatment to get you back to normal.",
              color: "mint-accent",
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

      {/* Process */}
      <section id="process" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-mint-accent via-primary to-coral-accent bg-clip-text text-transparent leading-tight">
            Our Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-3xl glossy-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <Shield className="h-8 w-8 text-mint-accent" />
                Screening Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-mint-accent/20 text-mint-accent text-sm font-bold">
                    1
                  </span>
                  Call to schedule a confidential screening appointment
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold">
                    2
                  </span>
                  Arrive at your scheduled time - we'll see you privately
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-coral-accent/20 text-coral-accent text-sm font-bold">
                    3
                  </span>
                  Professional examination takes about 15 minutes
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-mint-accent/20 text-mint-accent text-sm font-bold">
                    4
                  </span>
                  Receive official documentation for school/camp
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="rounded-3xl glossy-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                Treatment Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold">
                    1
                  </span>
                  Schedule treatment appointment in private area
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-coral-accent/20 text-coral-accent text-sm font-bold">
                    2
                  </span>
                  Gentle, thorough removal using safe methods
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-mint-accent/20 text-mint-accent text-sm font-bold">
                    3
                  </span>
                  Patient, kid-friendly approach throughout
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold">
                    4
                  </span>
                  Follow-up documentation and care instructions
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faqs" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-mint-accent via-primary to-coral-accent bg-clip-text text-transparent leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              question: "How long does a lice screening take?",
              answer:
                "A thorough lice screening typically takes about 15 minutes. We examine the entire scalp carefully to ensure accurate results.",
            },
            {
              question: "Will schools accept your screening results?",
              answer:
                "Yes! Our professional lice screening documentation is accepted by Montgomery County schools and most local camps and daycares.",
            },
            {
              question: "Is the screening completely confidential?",
              answer:
                "Absolutely. We conduct all lice services in a private area separate from our main salon to ensure complete confidentiality.",
            },
            {
              question: "What if lice are found during screening?",
              answer:
                "If lice are detected, we'll discuss treatment options with you. We can often provide same-day treatment if needed.",
            },
            {
              question: "How long does lice treatment take?",
              answer:
                "Treatment time varies depending on hair length and severity of infestation, typically 1-3 hours. We work carefully and thoroughly.",
            },
            {
              question: "Do you offer emergency or after-hours service?",
              answer:
                "We understand lice situations can be urgent. Call us to discuss emergency appointments - we'll do our best to accommodate urgent needs.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept cash, credit cards, and debit cards for all lice services. Payment is due at time of service.",
            },
            {
              question: "Do you guarantee your treatment results?",
              answer:
                "We use proven, effective methods and provide thorough treatment. Follow-up screenings are available to ensure complete removal.",
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

      {/* Important Information */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <Card className="rounded-3xl glossy-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-3">
              <FileText className="h-8 w-8 text-mint-accent" />
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-bold text-foreground mb-2">What to Expect:</h4>
                <ul className="space-y-1">
                  <li>• Completely private and confidential service</li>
                  <li>• Professional, experienced staff</li>
                  <li>• Safe, effective methods only</li>
                  <li>• Kid-friendly, patient approach</li>
                  <li>• Official documentation provided</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Please Note:</h4>
                <ul className="space-y-1">
                  <li>• Call ahead to schedule appointment</li>
                  <li>• Bring any school forms that need completion</li>
                  <li>• Treatment time varies by severity</li>
                  <li>• Follow-up may be recommended</li>
                  <li>• We accept cash and card payments</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section id="book-now" className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <div className="rounded-3xl p-12 bg-gradient-to-br from-mint-accent/20 via-primary/10 to-coral-accent/20 glossy-card">
          <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-mint-accent to-primary bg-clip-text text-transparent">
            Need Lice Screening or Treatment?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Call us today for confidential, professional lice services. We understand this can be stressful and we're
            here to help with compassion and expertise.
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
              <a href="tel:3015696756">Call to Book Appointment</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import Banner from "@/components/banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Glamour Parties - The Yellow Balloon Kids Hair Salon",
  description:
    "Magical salon experiences for kids & tweens. Perfect for achievements and special celebrations. Confidence-boosting styling parties.",
}

export default function GlamourPage() {
  return (
    <>
      {/* Hero Banner */}
      <Banner
        title="A Magical Salon Experience for Kids & Tweens"
        subtitle="Celebrate achievements, milestones, and special moments with confidence-boosting glamour parties that create lasting memories."
        variant="yellow"
      />

      {/* What's a Glamour Party */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balloon-dark mb-6">What's a Glamour Party?</h2>
              <p className="text-lg text-balloon-dark mb-6 leading-relaxed">
                A glamour party at The Yellow Balloon is more than just styling - it's a confidence-building experience
                that makes every child feel like a star. Perfect for achievements or just because!
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">✨</div>
                  <p className="text-balloon-dark">Stylish braids, curls, or elegant up-dos tailored to each child</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💅</div>
                  <p className="text-balloon-dark">Optional nail polish and glitter accents for extra sparkle</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📸</div>
                  <p className="text-balloon-dark">Photo opportunities to capture the magical transformation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎈</div>
                  <p className="text-balloon-dark">
                    Everyone leaves with a confidence boost and their signature Yellow Balloon
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=400&width=500&text=Glamour+Party+Styling"
                alt="Children getting glamour styling at party"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Glamour Parties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-balloon-dark mb-12">
            Why Families Love Our Glamour Parties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">💪</div>
                <CardTitle className="text-xl text-balloon-dark">Confidence Boosting</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-balloon-dark">
                  Every child leaves feeling special and confident. We focus on making each participant feel like the
                  star they are, building self-esteem through positive experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">🛡️</div>
                <CardTitle className="text-xl text-balloon-dark">Fun & Safe</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-balloon-dark">
                  Our experienced stylists create a safe, supervised environment where children can have fun while
                  getting pampered. All products are child-safe and gentle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">🎉</div>
                <CardTitle className="text-xl text-balloon-dark">Flexible Occasions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-balloon-dark">
                  Perfect for achievements, school milestones, or unique family outings. We customize each party to
                  match the celebration and age group.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-balloon-dark mb-12">Party Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-light-balloon border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-balloon-dark text-center">Pricing</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-balloon-dark mb-2">$35</div>
                  <p className="text-balloon-dark mb-4">per child</p>
                  <p className="text-sm text-balloon-dark">Minimum 4 children required</p>
                  <p className="text-sm text-balloon-dark mt-2">
                    Includes styling, optional nail polish, glitter accents, balloon, and lollipop
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-light-balloon border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-balloon-dark text-center">Perfect For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-balloon-dark">
                    <li className="flex items-center space-x-2">
                      <span>🏆</span>
                      <span>Achievement rewards</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span>🏆</span>
                      <span>Achievement rewards</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span>🎓</span>
                      <span>School milestones</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span>👭</span>
                      <span>Friend group outings</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span>💕</span>
                      <span>Mother-daughter bonding</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-balloon">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balloon-dark mb-6">Ready to Plan Your Glamour Party?</h2>
          <p className="text-lg text-balloon-dark mb-8 max-w-2xl mx-auto">
            Let's create a magical experience that your child and their friends will remember forever!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3015696756">
              <Button size="lg" className="bg-balloon-dark text-white hover:bg-gray-700 text-lg px-8 py-4">
                Call to Plan Your Event
              </Button>
            </a>
            <a href="tel:3015696756">
              <Button
                size="lg"
                variant="outline"
                className="border-balloon-dark text-balloon-dark hover:bg-balloon-dark hover:text-white bg-transparent text-lg px-8 py-4"
              >
                Ask About Availability
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

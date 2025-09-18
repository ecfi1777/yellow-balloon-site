import Banner from "@/components/banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - The Yellow Balloon Kids Hair Salon",
  description:
    "Learn about The Yellow Balloon's 20+ year history serving Montgomery County families with gentle, kid-friendly hair care services.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <Banner
        title="Making Haircuts Happy for Over 20 Years"
        subtitle="Trusted by families throughout Montgomery County for gentle, professional children's hair care."
        variant="blue"
      />

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Image
                src="/happy-family-at-kids-hair-salon-with-colorful-deco.jpg"
                alt="Happy family at The Yellow Balloon salon"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balloon-dark mb-6">Our Story</h2>
              <p className="text-lg text-balloon-dark mb-6 leading-relaxed">
                For over 20 years, The Yellow Balloon has been the trusted choice for families throughout Gaithersburg,
                Darnestown, Potomac, Germantown, and Montgomery County. We understand that every child is unique, and
                we've built our reputation on creating positive, memorable experiences for children of all ages.
              </p>
              <p className="text-lg text-balloon-dark mb-6 leading-relaxed">
                What started as a simple vision to make haircuts fun has grown into a beloved community institution. Our
                experienced stylists don't just cut hair – they create smiles, build confidence, and turn what could be
                a stressful experience into something children actually look forward to.
              </p>
              <p className="text-lg text-balloon-dark mb-8 leading-relaxed">
                From a baby's first haircut to a teenager's special style, we've been there for countless milestones,
                always ensuring every visit ends with a smile, a balloon, and a lollipop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Yellow Balloon Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-balloon-dark mb-12">
            The Yellow Balloon Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">🎪</div>
                <CardTitle className="text-lg text-balloon-dark">Fun Waiting Area</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-balloon-dark">
                  Toys, coloring books, and fun rides keep children entertained while they wait for their turn.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">📺</div>
                <CardTitle className="text-lg text-balloon-dark">TVs at Every Station</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-balloon-dark">
                  Children can watch their favorite shows during their haircut, making the experience enjoyable and
                  distraction-free.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">✂️</div>
                <CardTitle className="text-lg text-balloon-dark">Gentle Stylists</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-balloon-dark">
                  Our experienced team specializes in working with children, using patience and care to ensure comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">🎈</div>
                <CardTitle className="text-lg text-balloon-dark">Special Rewards</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-balloon-dark">
                  Every child leaves with a smile, a colorful balloon, and a sweet lollipop as a reward for being great!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-balloon">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balloon-dark mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg text-balloon-dark mb-8 max-w-2xl mx-auto">
            Join the thousands of families who trust The Yellow Balloon for their children's hair care needs.
          </p>
          <a href="tel:3015696756">
            <Button size="lg" className="bg-balloon-dark text-white hover:bg-gray-700 text-lg px-8 py-4">
              Call to Book Appointment
            </Button>
          </a>
        </div>
      </section>
    </>
  )
}

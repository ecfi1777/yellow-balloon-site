import Banner from "@/components/banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lice Screening & Treatment - The Yellow Balloon",
  description:
    "Private, confidential lice screening and treatment services. Results accepted by local schools. Gentle, kid-friendly care in a comfortable environment.",
}

export default function LicePage() {
  return (
    <>
      {/* Hero Banner */}
      <Banner
        title="Confidential Lice Screening & Treatment"
        subtitle="Private, gentle care with results accepted by local schools. We understand this can be stressful - we're here to help."
        variant="blue"
      />

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-light-balloon border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">🔒</div>
                <CardTitle className="text-xl text-balloon-dark">Private Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-balloon-dark">
                  Our lice services are conducted in a separate, private area away from the main salon to ensure
                  complete confidentiality and comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-light-balloon border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">💝</div>
                <CardTitle className="text-xl text-balloon-dark">Kid-Friendly Care</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-balloon-dark">
                  Our gentle, patient approach helps children feel comfortable during the process. We explain everything
                  in age-appropriate terms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-light-balloon border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">🏫</div>
                <CardTitle className="text-xl text-balloon-dark">School-Required Screenings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-balloon-dark">
                  Our screening results are accepted by local schools. We provide official documentation when needed for
                  school re-entry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balloon-dark mb-6">Our Lice Services</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-balloon-dark mb-3">Lice Screening - $25</h3>
                  <p className="text-balloon-dark leading-relaxed">
                    Quick, thorough, and confidential head checks to determine if lice or nits are present. Perfect for
                    peace of mind or school requirements. Results provided immediately with official documentation if
                    needed.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-balloon-dark mb-3">Lice Treatment - $85/hour</h3>
                  <p className="text-balloon-dark leading-relaxed">
                    Comprehensive lice removal process using safe, effective methods. Typically requires two sessions
                    for complete elimination. Includes education on prevention and follow-up care instructions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=400&width=500&text=Private+Lice+Treatment+Room"
                alt="Private, comfortable treatment room"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-balloon-dark mb-6">You're Not Alone</h2>
          <p className="text-lg text-balloon-dark mb-6 leading-relaxed">
            Dealing with lice can feel overwhelming, but it's more common than you think. Millions of children get lice
            every year - it has nothing to do with cleanliness or hygiene. We're here to help you through this with
            compassion, expertise, and complete confidentiality.
          </p>
          <p className="text-lg text-balloon-dark mb-8 leading-relaxed">
            Our experienced team has helped countless families resolve lice issues quickly and discreetly. We'll guide
            you through the entire process and ensure your child feels comfortable every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3015696756">
              <Button size="lg" className="bg-slate-800 text-white hover:bg-slate-900 text-lg px-8 py-4">
                Call for Screening
              </Button>
            </a>
            <a href="tel:3015696756">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white text-lg px-8 py-4 bg-transparent"
              >
                Ask Questions
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-balloon">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balloon-dark mb-6">Need Help Today?</h2>
          <p className="text-lg text-balloon-dark mb-8 max-w-2xl mx-auto">
            Don't let lice stress you out. Call us now for immediate assistance and compassionate care.
          </p>
          <a href="tel:3015696756">
            <Button size="lg" className="bg-slate-800 text-white hover:bg-slate-900 text-lg px-8 py-4">
              Call (301) 569-6756
            </Button>
          </a>
        </div>
      </section>
    </>
  )
}

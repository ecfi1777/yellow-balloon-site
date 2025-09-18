"use client"

import Banner from "@/components/banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPageClient() {
  return (
    <>
      {/* Hero Banner */}
      <Banner
        title="We're Here When You Need Us"
        subtitle="Find our hours, location, and contact details below. We're always happy to answer your questions!"
        variant="blue"
      />

      {/* Hours & Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-light-balloon border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-balloon-dark text-center flex items-center justify-center space-x-2">
                  <span>🕒</span>
                  <span>Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 text-balloon-dark">
                  <div>
                    <p className="font-semibold">Tuesday – Friday</p>
                    <p>10:00am – 6:00pm</p>
                  </div>
                  <div>
                    <p className="font-semibold">Saturday – Sunday</p>
                    <p>10:00am – 5:00pm</p>
                  </div>
                  <div>
                    <p className="font-semibold">Monday & Thursday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-light-balloon border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-balloon-dark text-center flex items-center justify-center space-x-2">
                  <span>📞</span>
                  <span>Contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 text-balloon-dark">
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:3015696756" className="text-lg hover:underline">
                      (301) 569-6756
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>255 Market Street West</p>
                    <p>Gaithersburg, MD 20878</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-balloon-dark mb-12">Find Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                title="The Yellow Balloon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.234567890123!2d-77.2013!3d39.1417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s255%20Market%20Street%20West%2C%20Gaithersburg%2C%20MD%2020878!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-balloon-dark mb-4">
                Conveniently located in Gaithersburg, serving families throughout Montgomery County including
                Darnestown, Potomac, and Germantown.
              </p>
              <p className="text-sm text-gray-600">
                Plenty of parking available. We're located in the Market Street shopping area with easy access from
                major roads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-balloon-dark mb-12">Areas We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-light-balloon p-4 rounded-lg">
                <p className="text-balloon-dark font-medium">Gaithersburg</p>
              </div>
              <div className="bg-light-balloon p-4 rounded-lg">
                <p className="text-balloon-dark font-medium">Darnestown</p>
              </div>
              <div className="bg-light-balloon p-4 rounded-lg">
                <p className="text-balloon-dark font-medium">Potomac</p>
              </div>
              <div className="bg-light-balloon p-4 rounded-lg">
                <p className="text-balloon-dark font-medium">Germantown</p>
              </div>
              <div className="bg-light-balloon p-4 rounded-lg">
                <p className="text-balloon-dark font-medium">Rockville</p>
              </div>
              <div className="bg-light-balloon p-4 rounded-lg">
                <p className="text-balloon-dark font-medium">Montgomery County</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-balloon">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balloon-dark mb-6">Ready to Visit?</h2>
          <p className="text-lg text-balloon-dark mb-8 max-w-2xl mx-auto">
            Call us today to schedule your appointment. We can't wait to welcome you and your child to The Yellow
            Balloon family!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3015696756">
              <Button size="lg" className="bg-balloon-dark text-white hover:bg-gray-700 text-lg px-8 py-4">
                Call to Book Appointment
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-balloon-dark text-balloon-dark hover:bg-balloon-dark hover:text-white bg-transparent text-lg px-8 py-4"
              onClick={() => window.open("https://maps.google.com/?q=255+Market+Street+West+Gaithersburg+MD+20878")}
            >
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

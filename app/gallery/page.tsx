import Banner from "@/components/banner"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery - The Yellow Balloon Kids Hair Salon",
  description:
    "See the smiles at The Yellow Balloon! Browse our gallery of happy children and their beautiful haircuts, glamour parties, and special moments.",
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero Banner */}
      <Banner
        title="See the Smiles at The Yellow Balloon"
        subtitle="Every haircut ends with a smile, a balloon, and a lollipop! Browse our gallery of happy customers and beautiful transformations."
        variant="blue"
      />

      {/* Featured Slideshow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/happy-children-getting-haircuts-at-colorful-salon.jpg"
              alt="Featured photo of happy children at The Yellow Balloon"
              width={800}
              height={500}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-balloon-dark mb-12">Our Happy Customers</h2>
          <p className="text-center text-balloon-dark mb-12 max-w-2xl mx-auto">
            Tap any photo to view larger. See the joy and confidence that comes with every Yellow Balloon experience!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Gallery Images */}
            <div className="group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Happy+Child+1"
                alt="Happy child after haircut"
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Glamour+Party+1"
                alt="Children at glamour party"
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300&text=First+Haircut"
                alt="Baby's first haircut celebration"
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Happy+Child+2"
                alt="Smiling child with new haircut"
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Styling+Session"
                alt="Child getting styled at salon"
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Glamour+Party+2"
                alt="Group glamour party styling"
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Happy+Child+3"
                alt="Child with balloon and lollipop"
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Special+Style"
                alt="Child with special occasion hairstyle"
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-balloon">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balloon-dark mb-6">
            Want to See Your Child in Our Gallery of Smiles?
          </h2>
          <p className="text-lg text-balloon-dark mb-8 max-w-2xl mx-auto">
            Book an appointment today and let us create a magical experience that will have your child beaming with
            confidence!
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

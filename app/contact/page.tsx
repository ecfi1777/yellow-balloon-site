import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Hours & Contact - The Yellow Balloon Kids Hair Salon",
  description:
    "Find our hours, location, and contact details. Located at 255 Market Street West, Gaithersburg, MD. Call (301) 569-6756 to book your appointment.",
}

export default function ContactPage() {
  return <ContactPageClient />
}

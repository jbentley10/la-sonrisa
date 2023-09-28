import Link from "next/link";
import Heading from "../components/heading";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: 'Book Now | La Sonrisa Photo Booth',
  description: 'Book a photo booth for your event in LA, OC, or SD',
}

export default function BookNow() {
  return (
    <main className={openSans.className}>
      <Heading text="Book now"/>
      <div id="text-block" className="px-8">
        <h3 className="text-2xl pb-2">To book, DM us on Instagram or email us at <Link href="mailto:hola@lasonrisapb.com">hola@lasonrisapb.com</Link> </h3>
      </div>
    </main>
  )
}

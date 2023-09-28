import Heading from "../components/heading";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: 'Packages | La Sonrisa Photo Booth',
  description: 'Learn about our pricing packages for reserving a photo booth for your event in LA, OC, or SD',
}

export default function Packages() {
  return (
    <main className={openSans.className}>
      <Heading text={"Packages"}/>
      <div id="text-block" className="px-8">
        <h3 className="text-2xl pb-2">Each package includes: </h3>
        <ul className="text-base list-disc px-8">
          <li>Friendly on-site attendant(s)</li>
          <li>Digital prints</li>
          <li>Your choice of backdrop</li>
          <li>Custom template/overlay design</li>
          <li>Online gallery delivered after the event</li>
          <li>Set-up and break down</li>
        </ul>
      </div>
    </main>
  )
}

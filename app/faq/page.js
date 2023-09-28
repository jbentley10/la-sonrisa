import Link from "next/link";
import Heading from "../components/heading";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: 'FAQ | La Sonrisa Photo Booth',
  description: 'Frequently asked questions about photo booths for your event in LA, OC, or SD',
}

export default function FAQ() {
  return (
    <main className={openSans.className}>
      <Heading text="FAQ"/>
      <div id="text-block" className="px-8 py-10">
        <h3 className="text-2xl pb-2">How do i book the photo booth? </h3>
        <p className="text-base list-disc px-8">You can book our photo booth by DMing us on Instagram or by sending us an email at <Link href="mailto:hola@lasonrisapb.com">hola@lasonrisapb.com</Link>.</p>
      </div>
      <div id="text-block" className="px-8 py-10">
        <h3 className="text-2xl pb-2">What is required to reserve my date?</h3>
        <p className="text-base list-disc px-8">We require a non-refundable deposit to reserve your date. The remaining balance is due a week prior to your event.</p>
      </div>
      <div id="text-block" className="px-8 py-10">
        <h3 className="text-2xl pb-2">Does the photo booth require a power outlet?</h3>
        <p className="text-base list-disc px-8">Yes, our photo booth requires 110-120 volts of power from a 3-prong, basic electrical outlet.</p>
      </div>
      <div id="text-block" className="px-8 py-10">
        <h3 className="text-2xl pb-2">How much space is needed for the photo booth?</h3>
        <p className="text-base list-disc px-8">We require at least a 10 x 10 ft. space.</p>
      </div>
      <div id="text-block" className="px-8 py-10">
        <h3 className="text-2xl pb-2">Is set-up and break-down time included?</h3>
        <p className="text-base list-disc px-8">Yes! We will be at your event 1 hour early for setup.</p>
      </div>
      <div id="text-block" className="px-8 py-10">
        <h3 className="text-2xl pb-2">Does the photo booth need WiFi?</h3>
        <p className="text-base list-disc px-8">It is highly recommended to have WiFi at your event for the full experience. If for some reason WiFi is not available, your captures will be added to a queue and sent out once it is.</p>
      </div>
      <div id="text-block" className="px-8 py-10">
        <h3 className="text-2xl pb-2">Do you offer prints?</h3>
        <p className="text-base list-disc px-8">Yes! Our packages include 4x6 prints of 2x6 photo strips.</p>
      </div>
      <div id="text-block" className="px-8 py-10">
        <h3 className="text-2xl pb-2">Do you do outdoor events?</h3>
        <p className="text-base list-disc px-8">Weather permitting, we do! The photo booth needs to be set up under a covered area and on a flat, hard surface (concrete, patio, etc).</p>
      </div>
      <div id="text-block" className="px-8 py-10">
        <h3 className="text-2xl pb-2">How do I get my photos after the event?</h3>
        <p className="text-base list-disc px-8">We will email you a link with a digital gallery of all the photos your guests took within 24-48 hours after your event.</p>
      </div>
    </main>
  )
}

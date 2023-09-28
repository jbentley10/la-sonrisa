import Heading from "../components/heading";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["300"] });

export default function Backdrops() {
  return (
    <main className={openSans.className}>
      <Heading text="Backdrops"/>
      <div id="text-block" className="px-8">
        <h3 className="text-2xl pb-2">Each package includes: </h3>
      </div>
    </main>
  )
}

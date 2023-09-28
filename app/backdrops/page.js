import Heading from "../components/heading";
import { Open_Sans } from "next/font/google";
import PhotoGrid from "../components/photo-grid";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: 'Backdrops | La Sonrisa Photo Booth',
  description: 'Discover the various backdrops you can use for a photo booth for your event in LA, OC, or SD',
}

export default function Backdrops() {
  return (
    <main className={openSans.className}>
      <Heading text="Backdrops"/>
      <PhotoGrid
        photo1={"/backdrops/luna.webp"}
        photo2={"/backdrops/sal.webp"}
      />
      <PhotoGrid
        photo1={"/backdrops/fresa.webp"}
        photo2={"/backdrops/papaya.webp"}
      />
      <PhotoGrid
        photo1={"/backdrops/uva.webp"}
        photo2={"/backdrops/estrella.webp"}
      />
    </main>
  )
}

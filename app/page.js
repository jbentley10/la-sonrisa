import Hero from "./components/hero";
import InfoBlock from "./components/info-block";
import PhotoGrid from "./components/photo-grid";

export const metadata = {
  title: 'Home | La Sonrisa Photo Booth',
  description: 'Learn about how to book a photo booth for your event in LA, OC, or SD',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <PhotoGrid 
        photo1={"/booth-1.webp"}
        photo2={"/booth-2.webp"}
        photo3={"/booth-3.webp"}
      />
      <InfoBlock 
        heading="¡Hola!"
        body="Here at La Sonrisa, we believe a SONRISA is the universal language for love and happiness. It is our goal to create long lasting memories and spread happiness one SONRISA at a time. We are Mathew & Jeraldyn Flores, and can’t wait to see your SONRISA."
      />
    </main>
  )
}

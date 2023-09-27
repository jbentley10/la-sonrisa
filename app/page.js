import Hero from "./components/hero";
import InfoBlock from "./components/info-block";

export default function Home() {
  return (
    <main>
      <Hero />
      <InfoBlock 
        heading="¡Hola!"
        body="Here at La Sonrisa, we believe a SONRISA is the universal language for love and happiness. It is our goal to create long lasting memories and spread happiness one SONRISA at a time. We are Mathew & Jeraldyn Flores, and can’t wait to see your SONRISA."
      />
    </main>
  )
}

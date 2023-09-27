import { Rye, Open_Sans } from 'next/font/google'
import Image from 'next/image'

const rye = Rye({ subsets: ['latin'], weight: ['400'], })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['300'], })

export default function Hero() {
    return (
        <div id="hero" className="h-5/6 py-20">
            <div className={rye.className}>
                <div id="logo-container" className="flex justify-center items-cente pb-8">
                    <Image
                        src="/logo.png"
                        width={150}
                        height={150}
                        alt="La Sonrisa skull logo"
                    />
                </div>
                <h1 id="hero-heading" className="text-center text-6xl">La Sonrisa</h1>
                <div className={openSans.className}>
                    <h2 id="hero-subheading" className="text-center text-4xl uppercase pt-4">Photo Booth</h2>
                    <h3 id="hero-subheading-2" className="text-center text-2xl uppercase pt-4">OC - LA - SD</h3>
                    {/* <Image src="/logo.png" /> */}
                </div>
            </div>
        </div>
    )
}
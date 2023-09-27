import { Rye, Open_Sans } from 'next/font/google'
import Image from 'next/image'

// If loading a variable font, you don't need to specify the font weight
const rye = Rye({ subsets: ['latin'], weight: ['400'], })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['300'], })

export default function Hero() {
    return (
        <div className="h-5/6 py-24">
            <div className={rye.className}>
                <h1 className="text-center text-6xl">La Sonrisa</h1>
                <div className={openSans.className}>
                    <h2 className="text-center text-4xl uppercase pt-4">Photo Booth</h2>
                    <h3 className="text-center text-2xl uppercase pt-4">OC - LA - SD</h3>
                    {/* <Image src="/logo.png" /> */}
                </div>
            </div>
        </div>
    )
}
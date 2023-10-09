import { Rye, Open_Sans } from 'next/font/google'
import Image from 'next/image'

const rye = Rye({ subsets: ['latin'], weight: ['400'], })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['300'], })

export default function Hero() {
    return (
        <div id="hero" className="h-5/6 pb-20">
            <div className={rye.className}>
                <div id="logo-container" className="flex justify-center items-cente pb-8">
                    <Image
                        src="/logo-pink.webp"
                        width={500}
                        height={500}
                        alt="La Sonrisa skull logo"
                    />
                </div>
            </div>
        </div>
    )
}
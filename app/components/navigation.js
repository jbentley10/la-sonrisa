import Link from "next/link";
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'], })

export default function Navigation() {
    return (
        <div id="navigation">
            <div id="navigation-links" className="flex flex-row justify-center items-center py-10">
                <div className={openSans.className}>
                    <Link className="px-4 hover:text-white transition ease-in-out duration-300" href="/book-now">Book Now</Link>
                    <Link className="px-4 hover:text-white transition ease-in-out duration-300" href="/packages">Packages</Link>
                    <Link className="px-4 hover:text-white transition ease-in-out duration-300" href="/backdrops">Backdrops</Link>
                    <Link className="px-4 hover:text-white transition ease-in-out duration-300" href="/faq">FAQ</Link>
                </div>
            </div>
        </div>
    )
}
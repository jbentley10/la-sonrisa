import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'], })

export default function Footer() {
    return (
        <div id="footer" className={openSans.className}>
            <p id="copyright-text" className="text-center py-8">Copyright La Sonrisa 2023</p>
        </div>
    )
}
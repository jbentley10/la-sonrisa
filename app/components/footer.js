import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
    return (
        <div id="footer" className={openSans.className}>
            <div className="flex justify-center pt-6">
                <Link  href="https://www.instagram.com/lasonrisaphotobooth/">
                    <FaInstagram className="text-4xl hover:text-white transition ease-in-out duration-300" />
                </Link>
            </div>
            <p id="copyright-text" className="text-center pt-3 pb-8">
                Copyright La Sonrisa 2023
            </p>
        </div>
    );
}

import { Rye } from 'next/font/google'

const rye = Rye({ subsets: ['latin'], weight: ['400'], })

export default function Heading({ text }) {
    return (
        <div id="hero" className="h-5/6 py-20">
            <div className={rye.className}>
                <h1 id="hero-heading" className="text-center text-6xl">{ text }</h1>
            </div>
        </div>
    )
}
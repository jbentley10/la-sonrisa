import { Rye, Open_Sans } from 'next/font/google'

const rye = Rye({ subsets: ['latin'], weight: ['400'], })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['300'], })

export default function InfoBlock({heading, body}) {
    return (
        <div className="h-1/2 py-12 px-6">
            <div className={rye.className}>
                <h1 className="text-left text-3xl pb-4">{heading}</h1>
            </div>
            <div className={openSans.className}>
                <p className="text-left text-base">{body}</p>
            </div>
        </div>
    )
}
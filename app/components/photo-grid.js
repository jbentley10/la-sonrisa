import Image from "next/image";

export default function PhotoGrid({ heading, body }) {
    return (
        <div id="photo-grid w-full overflow-hidden">
            <div id="top-row" className="overflow-hidden flex flex-row justify-center items-center py-10">
                <Image
                    src="/booth-1.webp"
                    width={564}
                    height={388}
                    alt="La Sonrisa skull logo"
                />
                <Image
                    src="/booth-2.webp"
                    width={564}
                    height={388}
                    alt="La Sonrisa skull logo"
                />
                <Image
                    src="/booth-3.webp"
                    width={564}
                    height={388}
                    alt="La Sonrisa skull logo"
                />
            </div>
        </div>
    )
}
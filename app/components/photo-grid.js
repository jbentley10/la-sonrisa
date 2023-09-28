import Image from "next/image";

export default function PhotoGrid({ photo1, photo2, photo3 }) {
    return (
        <div id="photo-grid w-full overflow-hidden">
            <div id="top-row" className="overflow-hidden flex flex-row justify-center items-center py-10">
                { photo1 && 
                    <Image
                        src={photo1}
                        width={564}
                        height={388}
                        alt="La Sonrisa skull logo"
                    />
                }
                { photo2 && 
                    <Image
                        src={photo2}
                        width={564}
                        height={388}
                        alt="La Sonrisa skull logo"
                    />
                }
                { photo3 && 
                    <Image
                        src={photo3}
                        width={564}
                        height={388}
                        alt="La Sonrisa skull logo"
                    />
                }
            </div>
        </div>
    )
}
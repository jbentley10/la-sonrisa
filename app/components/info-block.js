import { Rye, Open_Sans } from "next/font/google";
import Image from "next/image";

const rye = Rye({ subsets: ["latin"], weight: ["400"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["300"] });

export default function InfoBlock({ heading, body }) {
	return (
		<div id="info-block" className="flex items-center">
			<div id="image-container" className="h-1/2 py-12 px-6 w-1/2">
				<Image
					src="/owners.webp"
					width={564}
					height={388}
					alt="La Sonrisa skull logo"
				/>
			</div>
			<div id="text-container" className="h-1/2 py-12 px-6 w-1/2">
				<div className={rye.className}>
					<h1 className="text-left text-3xl pb-4">{heading}</h1>
				</div>
				<div className={openSans.className}>
					<p className="text-left text-base">{body}</p>
				</div>
			</div>
		</div>
	);
}

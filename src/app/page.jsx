'use client';

import BlurText from './components/effects/BlurText';

export default function Home() {
	return (
		<div className="relative w-screen overflow-hidden h-[200vh]">
			<div className="h-screen relative">
				<video
					src="/videos/bali.webm"
					autoPlay
					muted
					loop
					className="absolute h-screen object-cover"
				/>

				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
					<h1 className="text-[2vw] mb-[-7vw]">
						Your Gateway to Indonesia Destionation
					</h1>
					<BlurText
						text="BALI"
						delay={1000}
						animateBy="letters"
						direction="top"
						className="text-[20vw] font-bold font-mono"
					/>
				</div>

				<div className="absolute bottom-16 sm:inset-x-10 inset-x-4">
					<div className="rounded-t-xl h-auto w-1/3 p-3 relative bg-green-300 text-black">
						hai
					</div>
					<div className="rounded-b-xl rounded-tr-xl h-40  bg-green-200 text-black">
						div
					</div>
				</div>
			</div>
		</div>
	);
}

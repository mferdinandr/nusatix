'use client';

import { Combobox } from '@/components/combobox';
import BlurText from '../components/effects/BlurText';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const frameworks = [
	{
		value: 'next.js',
		label: 'Next.js',
	},
	{
		value: 'sveltekit',
		label: 'SvelteKit',
	},
	{
		value: 'nuxt.js',
		label: 'Nuxt.js',
	},
	{
		value: 'remix',
		label: 'Remix',
	},
	{
		value: 'astro',
		label: 'Astro',
	},
];

export default function Home() {
	return (
		<div className="relative overflow-hidden h-[200vh]">
			<div className="h-screen relative">
				<video
					src="/videos/bali.webm"
					autoPlay
					muted
					loop
					className="absolute h-screen object-cover w-screen"
				/>

				<div className="absolute md:top-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
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

				<div className="absolute md:bottom-16 bottom-3 md:inset-x-10 inset-x-4">
					<Tabs defaultValue="wisata" className="bg-transparent">
						<TabsList className=" rounded-t-xl">
							<TabsTrigger value="wisata" className="flex gap-2">
								<img src="/icons/beach.webp" alt="" width={30} /> Tempat Wisata
							</TabsTrigger>
							<TabsTrigger value="perjalanan" className="flex gap-2">
								<img src="/icons/bus.webp" alt="" width={30} /> Perjalanan
							</TabsTrigger>
						</TabsList>
						<div className="bg-white py-7 rounded-b-xl rounded-tr-xl px-7">
							<TabsContent value="wisata" className="grid md:grid-cols-7 gap-5">
								<div className="col-span-2">
									<h3>Location</h3>
									<Combobox list={frameworks} className="w-10" />
								</div>
								<div className="col-span-2">
									<h3>Date</h3>
									<Popover className="w-full">
										<PopoverTrigger asChild>
											<Button variant={'outline'} className="w-full">
												Pick a date
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												// selected={field.value}
												// onSelect={field.onChange}
												disabled={(date) =>
													date > new Date() || date < new Date('1900-01-01')
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div className="col-span-2">
									<h3>Guest</h3>
									<Combobox list={frameworks} />
								</div>
								<Button className="place-self-end">Search Now</Button>
							</TabsContent>
							<TabsContent value="perjalanan">
								<div>
									<h3>Location</h3>
									<Combobox list={frameworks} />
								</div>
								<div>
									<h3>Date</h3>
									<Popover>
										<PopoverTrigger asChild>
											<Button variant={'outline'}>
												<span>Pick a date</span>
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												// selected={field.value}
												// onSelect={field.onChange}
												disabled={(date) =>
													date > new Date() || date < new Date('1900-01-01')
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div>
									<h3>Guest</h3>
									<Combobox list={frameworks} />
								</div>
								<Button className="place-self-end">Search Now</Button>
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</div>
		</div>
	);
}

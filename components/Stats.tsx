'use client';

import CountUp from 'react-countup';

const stats = [
	{
		num: 5,
		text: 'Years of experience',
	},
	{
		num: 3,
		text: 'Projects completed',
	},
	{
		num: 20,
		text: 'Technologies mastered',
	},
	{
		num: 668,
		text: 'Code Commits',
	},
];

export default function Stats() {
	return (
		<section className='pt-4 pb-4'>
			<div className='container mx-auto'>
				<div className='flex flex-wrap gap-6 max-[80vw] mx-auto xl:max-w-none'>
					{stats.map((item, index) => (
						<div
							key={index}
							className='flex-1 flex gap-4 items-center justify-center xl:just'
						>
							<CountUp
								end={item.num}
								duration={5}
								delay={2}
								className='text-4xl xl:text-6xl font-extrabold'
							/>
							<p className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
								} leading-snug text-white/80`}>
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
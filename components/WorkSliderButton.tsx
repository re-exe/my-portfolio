'use client';

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

export default function WorkSliderButton() {
	const swiper = useSwiper();

	return (
		<div className='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'>
			<button
				className='rounded-xl bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
				onClick={() => swiper.slidePrev()}
			>
				<PiCaretLeftBold />
			</button>
			<button
				className='rounded-xl bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
				onClick={() => swiper.slideNext()}
			>
				<PiCaretRightBold />
			</button>
		</div>
	);
}
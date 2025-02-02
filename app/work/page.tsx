'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight } from 'react-icons/bs';

// components
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import WorkSliderButton from '@/components/WorkSliderButton';

const projects = [
    {
        num: '01',
        category: 'Full-Stack',
        title: 'Shinisanji comunity web site',
        description: "We created a web site for a gaming community called 'SHINISANJI'.",
        stack: [
            { name: 'Next.js' },
            { name: 'Tailwind CSS' },
            { name: 'shadcn/ui' },
        ],
        image: '/assets/work/project-1.png',
        live: 'https://www.shinisanji.help',
    },
    {
        num: '02',
        category: 'frontend',
        title: 'project 2',
        description: 'Secret, but we are in the process of creating a community site. We will update when it is ready.',
        stack: [
            { name: 'Next.js' },
        ],
        image: '/assets/work/default-project.png',
        live: 'https://amagami.xyz/work',
    },
    {
        num: '03',
        category: 'frontend',
        title: 'project 3',
        description: 'We are developing a 3D action TPS game in Unity. We will update when it is ready.',
        stack: [
            { name: 'Unity' },
            { name: 'C#' },
        ],
        image: '/assets/work/default-project.png',
        live: 'https://amagami.xyz/work',
    },
];


export default function Work() {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: typeof Swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
            className='flex flex-col justify-center py-12 xl:px-0'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px]'>
                            {/* outline unm */}
                            <div className='text-8xl leading-none font-extrabold'>
                                {project.num}
                            </div>

                            {/* project category */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                {project.category} Project
                            </h2>

                            {/* project description */}
                            <p className='text-white/60'>{project.description}</p>

                            {/* stack */}
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => (
                                    <li key={index} className='text-xl text-accent'>
                                        {item.name}
                                        {index !== project.stack.length - 1 && ','}
                                    </li>
                                ))}
                            </ul>

                            {/* border */}
                            <div className='border border-white/20'></div>

                            {/* buttons */}
                            <div className='flex items-center gap-4'>
                                {/* Live project button */}
                                <Link
                                    href={project.live}
                                    target='_blank'
                                >
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'
                                            >
                                                <BsArrowUpRight className='text-white text-2xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className='h-[460px] relative group justify-center items-center bg-pink-50'>
                                        {/* overlay */}
                                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>

                                        {/* image */}
                                        <div className='relative w-full h-full'>
                                            <Image
                                                src={project.image}
                                                fill
                                                className='object-cover'
                                                alt={project.title}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* slider button */}
                            <WorkSliderButton />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
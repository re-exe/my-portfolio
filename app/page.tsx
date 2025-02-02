import { FaCode } from 'react-icons/fa6';

// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

export default function Home() {
    return (
      <section className='h-full'>
        <div className='container mx-auto h-full'>
            <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
                {/* text */}
                <div className='text-center xl:text-left order-2 xl:order-none'>
                    <div className='flex justify-center xl:justify-normal items-center gap-2 xl:gap-4 py-3'>
                        <FaCode
                            size={20}
                            className='text-accent'
                        />
                        <span className='text-xl'>Software Developer</span>
                    </div>
                    <div className='border border-white/20'></div>
                    <h1 className='h1 py-2'>
                        Hello!<br />I&apos;m <span className='text-accent'>amagami.</span>
                    </h1>
                    <p className='max-w-[500px] mt-2 mb-9 text-white/80'>
                    I am proficient in various programming languages and technologies!
                    </p>
                    {/* button and socials */}
                    <div className='flex flex-col xl:flex-row items-center gap-8'>
                        <div className='mb-8 xl:mb-0'>
                            <Social
                                containerStyles='flex gap-6'
                                iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                            />
                        </div>
                    </div>
                </div>
                {/* photo */}
                <div className='order-1 xl:order-none mb-8 xl:mb-0'>
                    <Photo />
                </div>
            </div>
        </div>
        <Stats />
      </section>
    );
}  
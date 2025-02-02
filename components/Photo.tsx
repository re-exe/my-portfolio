'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Photo() {
    return (
        <div className='w-full h-full relative'>
            {/* images */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
                    }}
                    className='w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] mix-blend-lighten'
                >
                    <Image
                        src='/assets/Icon.png'
                        priority
                        quality={100}
                        fill
                        alt='Photo'
                        className='object-contain rounded-full'
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
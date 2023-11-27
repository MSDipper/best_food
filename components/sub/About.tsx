import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

const About = () => {
    return (
        <motion.div
        variants={slideInFromLeft(0.8)}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.3 }}
        className='flex sm:flex-row sm:max-w-[400px] lg:justify-normal xs:justify-start sm:justify-center xs:items-start sm:items-center  lg:items-baseline flex-wrap  gap-x-[10px] pb-10 lg:pb-0 lg:flex-col gap-y-7 pt-12'>
            <div className='flex sm:flex-col lg:flex-row sm:gap-y-5 gap-x-5'>
                <img className='w-[35px]  h-[33px]' src="/icons/marker.svg" alt="marker" />
                <div className='flex flex-col sm:item-stretch lg:items-start'>
                    <p>
                        Location:
                    </p>
                    <span className='sm:max-w-[170px] lg:max-w-[380px]'>
                        A108 Adam Street, New York, NY 535022
                    </span>
                </div>
            </div>
            <div className='flex  sm:flex-col lg:flex-row sm:gap-y-5 gap-x-5  items-start'>
                <img className='w-[35px] h-[33px]' src="/icons/clock.svg" alt="clock" />
                <div className='flex flex-col items-start'>
                    <p>
                        Open Hours:
                    </p>
                    <span>
                        Monday-Saturday:
                    </span>
                    <span>
                        11:00 AM - 2300 PM
                    </span>
                </div>
            </div>
            <div className='flex sm:flex-col lg:flex-row sm:gap-y-5 gap-x-5 items-start'>
                <img className='w-[35px]  h-[33px]' src="/icons/email.svg" alt="email" />
                <div className='flex flex-col'>
                    <p>
                        Email:
                    </p>
                    <span>
                        info@example.com
                    </span>
                </div>
            </div>
            <div className='flex sm:flex-col lg:flex-row sm:gap-y-5 gap-x-5 items-start'>
                <img className='w-[35px]  h-[33px]' src="/icons/call.svg" alt="call" />
                <div className='flex flex-col'>
                    <p>
                        Call:
                    </p>
                    <span>+1 5589 55488 55s</span>
                </div>
            </div>
        </motion.div>
    )
}

export default About
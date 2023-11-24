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
        className='flex flex-col gap-y-7 pt-12'>
            <div className='flex gap-x-5'>
                <img src="/icons/marker.svg" alt="marker" />
                <div className='flex flex-col items-start'>
                    <p>
                        Location:
                    </p>
                    <span>
                        A108 Adam Street, New York, NY 535022
                    </span>
                </div>
            </div>
            <div className='flex gap-x-5  items-start'>
                <img src="/icons/clock.svg" alt="clock" />
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
            <div className='flex gap-x-5 items-start'>
                <img src="/icons/email.svg" alt="email" />
                <div className='flex flex-col'>
                    <p>
                        Email:
                    </p>
                    <span>
                        info@example.com
                    </span>
                </div>
            </div>
            <div className='flex gap-x-5 items-start'>
                <img src="/icons/call.svg" alt="call" />
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
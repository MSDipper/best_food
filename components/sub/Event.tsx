import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';

const Event = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.3 }}
            className='pt-[37px] pb-5'
        >

            <div className='container m-auto'>
                <div className='flex lg:flex-row xs:flex-col items-center justify-center gap-x-24'>
                    <div className='flex flex-col pb-16 max-w-[660px]'>
                        <motion.div variants={slideInFromLeft(0.5)}>
                            <h3 className='relative reem text-[34px] leading-9 flex flex-col pb-3 uppercase'>
                                EVENTS
                                <span className='border border-black absolute top-[30px] left-[135px] w-24 border-b-[1px] border-dashed'></span>
                                <span className='text-2xl capitalize leading-9 reem'> Organize Your Events in our Restaurant</span>
                            </h3>
                        </motion.div>
                        <motion.p
                            variants={slideInFromLeft(0.8)}
                            className='text-[#705448] pb-4'>
                            lamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        </motion.p>
                        <motion.p
                            variants={slideInFromLeft(0.8)}
                            className='text-[#705448]'>
                            lamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        </motion.p>
                    </div>
                    <div className='flex gap-6 xs:pb-11 lg:pb-0'>
                        <motion.div
                            variants={slideInFromRight(0.7)}
                            className='flex flex-wrap gap-y-6'>
                            <img className='w-[118px] h-[100px]' src="/event/1.webp" alt="events-img" />
                            <img className='w-[118px] h-[100px]' src="/event/2.webp" alt="events-img" />
                        </motion.div>
                        <motion.div
                            variants={slideInFromRight(0.8)}
                            className='flex flex-wrap gap-y-6'>

                            <img className='w-[118px] h-[100px]' src="/event/3.webp" alt="events-img" />
                            <img className='w-[118px] h-[100px]' src="/event/4.webp" alt="events-img" />
                        </motion.div>
                        <motion.div
                            variants={slideInFromRight(0.9)}
                            className='flex flex-wrap gap-y-6'>
                            <img className='w-[118px] h-[100px]' src="/event/5.webp" alt="events-img" />
                            <img className='w-[118px] h-[100px]' src="/event/6.webp" alt="events-img" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Event
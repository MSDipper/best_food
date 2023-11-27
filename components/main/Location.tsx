'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import About from '../sub/About';
import Feedback from '../sub/Feedback';

const Location = () => {
    return (
        <motion.div className='bg-[#FDBE9442]'>
            <div className='container m-auto py-11 text-[#705448]'>
                <div className='flex lg:flex-row xs:flex-col gap-x-[174px] lg:items-normal xs:items-center'>
                    <div className='flex flex-col  lg:items-normal xs:items-center'>
                        <motion.div
                            variants={slideInFromLeft(0.5)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.3 }}
                        >
                            <h3 className='relative reem text-[34px] leading-9 flex justify-between flex-col pb-3 uppercase'>
                                Our Location
                                <span className='text-2xl capitalize leading-9 reem'> Contact Us</span>
                            </h3>
                        </motion.div>

                        <About />
                    </div>
                    <Feedback />
                </div>
                <div className='pt-12 flex justify-center'>
                    <motion.a
                        variants={slideInFromLeft(0.6)}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.3 }}
                        href='#'
                        className='bg-[#705448] py-1 px-6 rounded-[10px] text-white font-medium text-lg uppercase cursor-pointer active:bg-gradient-to-l active:from-[#402F28] active:to-[#563F35]  transition-all duration-500'
                    >
                        Send us
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )
}

export default Location
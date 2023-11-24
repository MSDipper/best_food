'use client';
import React from 'react';
import '@fontsource-variable/sansita-swashed';
import { slideInFromLeft } from '@/utils/motion';
import { motion } from 'framer-motion';
import Button from '../Ui/Button';

const HeroContent = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex px-20 mt-60 w-full z-[20]'
        >
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='relative flex flex-col pl-[210px] pt-[150px] gap-5 text-while
                before:bg-[#F9F4F459] before:content-[""]
                before:absolute before:h-[205px] before:w-[770px] before:top-[127px] before:left-[-100px] before:bottom-0
                '
            >
                <div className='text-5xl text-end text-white
                sansita font-bold'>
                    Get Your
                </div>
                <div className='sansita text-white cursive font-bold text-5xl font-[sansita]'>Best Food and <span className='text-[#001016]'>Drink</span></div>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(1)}
                className='absolute top-[75%] left-[34%] cursor-pointer'>
                <Button />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent
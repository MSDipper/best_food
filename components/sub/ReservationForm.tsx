import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

const ReservationForm = () => {
    return (
        <motion.form
            variants={slideInFromLeft(0.6)}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.4 }}
            action='#'
            className='grid xs:gap-x-3 md:gap-x-[93px]  xs:gap-y-3 md:gap-y-6 grid-cols-3 self-start'
        >
                <input className='max-w-[327px] h-12 xs:text-[12px] sm:text-[15px] placeholder:text-[#fff]  outline-none border border-[#ECB417] bottom-2 bg-transparent text-[#fff] px-6' type="text" placeholder='NAME' />
                <input className='max-w-[327px] h-12 xs:text-[12px] sm:text-[15px] placeholder:text-[#fff]  outline-none border border-[#ECB417] bottom-2 bg-transparent text-[#fff] px-6' type="text" placeholder='DATE' />
                <input className='max-w-[327px] h-12 xs:text-[12px] sm:text-[15px] placeholder:text-[#fff]  outline-none border border-[#ECB417] bottom-2 bg-transparent text-[#fff] px-6' type="text" placeholder='EMAIL' />                <input className='max-w-[327px] h-12 xs:text-[12px] sm:text-[15px] placeholder:text-[#fff]  outline-none border border-[#ECB417] bottom-2 bg-transparent text-[#fff] px-6' type="text" placeholder='TIME' />
                <input className='max-w-[327px] h-12  xs:text-[12px] sm:text-[15px] placeholder:text-[#fff]  outline-none border border-[#ECB417] bottom-2 bg-transparent text-[#fff] px-6' type="text" placeholder='PHONE' />
                <input className='max-w-[327px] h-12 xs:text-[12px] sm:text-[15px] placeholder:text-[#fff]  outline-none border border-[#ECB417] bottom-2 bg-transparent text-[#fff] px-6' type="text" placeholder='NO OF PEOPLE' />
                <textarea className='lg:min-w-[327px] overflow-hidden resize-none placeholder:aling-start min-h-[117px] col-[4_/_1] row-[3/3] pt-3  xs:text-[12px] sm:text-b[15px] placeholder:text-[#fff] outline-none border border-[#ECB417] bottom-2 bg-transparent text-[#fff] px-6' placeholder='MESSAGE' />
        </motion.form>
    )
}

export default  ReservationForm
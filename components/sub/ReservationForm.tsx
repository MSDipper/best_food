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
            className='grid gap-x-[93px] gap-y-6 grid-cols-3 self-start'
        >
            <input className='max-w-[327px] h-12 text-b[15px] placeholder:text-white  outline-none border border-[#ECB417] bottom-2 bg-transparent text-white px-6' type="text" placeholder='NAME' />
            <input className='max-w-[327px] h-12 text-b[15px] placeholder:text-white outline-none border border-[#ECB417] bottom-2 bg-transparent text-white px-6' type="text" placeholder='DATE' />
            <input className='max-w-[327px] h-12 text-b[15px] placeholder:text-white outline-none border border-[#ECB417] bottom-2 bg-transparent text-white px-6' type="text" placeholder='EMAIL' />
            <input className='max-w-[327px] h-12 text-b[15px] placeholder:text-white outline-none border border-[#ECB417] bottom-2 bg-transparent text-white px-6' type="text" placeholder='TIME' />
            <input className='max-w-[327px] h-12 text-b[15px] placeholder:text-white outline-none border border-[#ECB417] bottom-2 bg-transparent text-white px-6' type="text" placeholder='PHONE' />
            <input className='max-w-[327px] h-12 text-b[15px] placeholder:text-white outline-none border border-[#ECB417] bottom-2 bg-transparent text-white px-6' type="text" placeholder='NO OF PEOPLE' />
            <textarea className='min-w-[327px] overflow-hidden resize-none placeholder:aling-start min-h-12 col-[4_/_1] row-[4/10] pt-3 text-b[15px] placeholder:text-white outline-none border border-[#ECB417] bottom-2 bg-transparent text-white px-6' placeholder='MESSAGE' />
        </motion.form>
    )
}

export default ReservationForm
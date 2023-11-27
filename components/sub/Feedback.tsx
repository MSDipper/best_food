import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromRight } from '@/utils/motion';

const Feedback = () => {
    return (
        <motion.div
            variants={slideInFromRight(0.8)}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.3 }}
        >
            <img className='w-[673px] h-[187px]'  src="/location/map.webp" alt="map" />
            <form action="#" className='pt-9 grid grid-cols-2 gap-y-6 gap-x-9'>
                <input className='max-w-[307px] h-12 text-[15px] placeholder:text-[#705448]  outline-none border border-[#0000004D] bottom-2 bg-transparent text-[#705448] px-6' type="text" placeholder='NAME' />
                <input className='max-w-[307px] h-12 text-[15px] placeholder:text-[#705448]  outline-none border border-[#0000004D] bottom-2 bg-transparent text-[#705448] px-6' type="text" placeholder='EMAIL' />
                <input className='sx:min-w-[307px] h-12 text-[15px] placeholder:text-[#705448]  outline-none border border-[#0000004D] bottom-2 bg-transparent text-[#705448] px-6 grid col-[3_/_1]' type="text" placeholder='PHONE' />
                <textarea className='lg:min-w-[327px] overflow-hidden resize-none placeholder:aling-start min-h-[117px] col-[3_/_1] row-[3/3] pt-3 text-b[15px] placeholder:text-[#705448] outline-none border border-[#0000004D] bottom-2 bg-transparent text-[#705448] px-6' placeholder='MESSAGE' />
            </form>
        </motion.div>
    )
}

export default Feedback
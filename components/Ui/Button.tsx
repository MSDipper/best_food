import React from 'react'
import { slideInFromLeft } from '@/utils/motion';
import { motion } from 'framer-motion';

const Button = () => {
    return (
        <motion.a
        href='#'
            className='bg-[#ECB417] py-1 px-6 rounded-[10px] text-black font-medium text-lg
            active:bg-gradient-to-r transition-all duration-500 active:from-[#ed7e29] active:to-[#f05a14] cursor-pointer relative z-50'
        >
            Book Now
        </motion.a>
    )
}

export default Button
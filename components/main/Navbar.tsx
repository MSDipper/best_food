'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';

const Navber = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='bg-[#2A2522] relative text-white pt-5 pb-2
        after:content-[""] after:absolute after:bottom-0 after:w-full after:h-[1px]
        after:bg-[#908E8E]'
        >
            <motion.div
                variants={slideInFromTop}
                className='container m-auto flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span className='relative text-2xl font-serif
                    after:content-[""] after:w-[171px]
                    after:h-[1px] after:bg-white after:absolute after:top-[29px]
                    after:left-0 
                    
                    '>THE MOUNT</span>
                    <span className='text-[15px]'>BAR AND RESTAURANT</span>
                </div>
                <div className='flex justify-between items-center gap-x-[120px]'>
                    <div>
                        <nav>
                            <ul className='flex gap-x-4 font-medium'>
                                <li>
                                    <a className='cursor-pointer transition duration-300 hover:text-[#ECB417]' href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className='cursor-pointer transition duration-300 hover:text-[#ECB417]' href="#">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className='cursor-pointer transition duration-300 hover:text-[#ECB417]' href="#">
                                        Menu
                                    </a>
                                </li>
                                <li>
                                    <a className='cursor-pointer transition duration-300 hover:text-[#ECB417]' href="#">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a className='cursor-pointer transition duration-300 hover:text-[#ECB417]' href="#">
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a className='cursor-pointer transition duration-300 hover:text-[#ECB417]' href="#">
                                        Booking
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='flex items-center justify-center gap-x-1 text-[#1A1918] bg-[#D9D9D9] rounded-[5px] px-[5px] active:bg-gradient-to-r active:from-white cursor-pointer transition-all duration-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M9.1025 14.8363C11.0825 18.7275 14.2725 21.9037 18.1637 23.8975L21.1887 20.8725C21.56 20.5013 22.11 20.3775 22.5913 20.5425C24.1313 21.0512 25.795 21.3263 27.5 21.3263C28.2563 21.3263 28.875 21.945 28.875 22.7013V27.5C28.875 28.2563 28.2563 28.875 27.5 28.875C14.5887 28.875 4.125 18.4113 4.125 5.5C4.125 4.74375 4.74375 4.125 5.5 4.125H10.3125C11.0687 4.125 11.6875 4.74375 11.6875 5.5C11.6875 7.21875 11.9625 8.86875 12.4712 10.4088C12.6225 10.89 12.5125 11.4262 12.1275 11.8113L9.1025 14.8363Z" fill="#1A1918" />
                        </svg>
                        <a href="tel:5674323007">5674323007</a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Navber
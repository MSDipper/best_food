import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottom, slideInFromLeft } from '@/utils/motion';


const Post = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1 }}
            className='pt-[37px] pb-5'
        >
            <div className='container m-auto'>
                <div className='flex flex-col pb-16'>
                    <motion.div variants={slideInFromLeft(0.5)}>
                        <h3 className='relative reem text-[34px] leading-9 flex flex-col pb-3 uppercase'>
                            Why US<span className='border border-black absolute top-[30px] left-[135px] w-24 border-b-[1px] border-dashed'></span>
                            <span className='text-2xl capitalize leading-9 reem'> Why Choose Our Restaurant</span>
                        </h3>
                    </motion.div>
                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className='text-[#705448]'>
                        lamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    </motion.p>
                </div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.1 }}
                    className='flex gap-x-6'>
                    <motion.div 
                    variants={slideInFromBottom(0.1)}
                    className='bg-cat1 relative bg-no-repeat bg-center h-[207px] w-[366px]'>
                        <div className='bg-[#FFE7A369] w-[366px] h-[74px] absolute bottom-0'>
                            <h3 className='text-end pt-2 pr-7 text-4xl font-bold transition duration-300 hover:text-[#ECB417] cursor-pointer'>Foods</h3>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={slideInFromBottom(0.2)}
                    className='bg-cat2 relative bg-no-repeat bg-center h-[207px] w-[366px]'>
                        <div className='bg-[#FFE7A369] w-[366px] h-[74px] absolute bottom-0'>
                            <h3 className='text-end pt-2 pr-7 text-4xl font-bold transition duration-300 hover:text-[#ECB417] cursor-pointer'>Drinks</h3>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={slideInFromBottom(0.3)}
                    className='bg-cat3 relative bg-no-repeat bg-center h-[207px] w-[366px]'>
                        <div className='bg-[#FFE7A369] w-[366px] h-[74px] absolute bottom-0'>
                            <h3 className='text-end pt-2 pr-7 text-4xl font-bold transition duration-300 hover:text-[#ECB417] cursor-pointer'>Events</h3>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Post
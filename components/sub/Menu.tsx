import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';


const Menu = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.3 }}
            className='pt-[37px] pb-5'
        >

            <div className='container m-auto'>
                <div className='flex flex-col pb-16'>
                    <motion.div variants={slideInFromLeft(0.5)}>
                        <h3 className='relative reem text-[34px] leading-9 flex justify-between flex-col pb-3 uppercase'>
                            Menu<span className='border border-black absolute top-[27px] left-[110px] w-24 border-b-[1px] border-dashed'></span>
                            <span className='text-2xl capitalize leading-9 reem'> Check Our Tasty Menu</span>
                        </h3>
                    </motion.div>
                </div>

                <div className='flex flex-wrap gap-x-[60px]'>
                    <motion.div
                        variants={slideInFromLeft(0.8)}
                    >
                        <div className='flex xs:items-center justify-center md:justify-normal sm:items-normal xs:flex-col sm:flex-row gap-x-5'>
                            <div>
                                <img className='pt-10 w-[121px] h-[142px]' src="/menu/1.webp" alt="menu-img" loading="lazy" />
                            </div>
                            <div className='max-w-[600px] pt-4'>
                                <h3 className='relative max-w-[325px] xs:m-auto sm:m-0 flex justify-between reem text-xl leading-9 pb-3 uppercase'>
                                    Sandwich
                                    <span className='border border-black inline-block absolute top-[24px] left-[120px] w-32 border-b-[0.8px] border-dashed'></span>
                                    <span className='pl-[122px]'> Rs 500</span>
                                </h3>
                                <p
                                    className='text-[#705448] max-w-[412px]'>
                                    lamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu
                                </p>
                            </div>
                        </div>
                        <div className='flex xs:items-center justify-center md:justify-normal sm:items-normal xs:flex-col sm:flex-row gap-x-5'>
                            <div>
                                <img className='pt-10 w-[121px] h-[142px]' src="/menu/2.webp" alt="menu-img" loading="lazy" />
                            </div>
                            <div className='max-w-[600px] pt-4'>
                                <h3 className='relative max-w-[325px] xs:m-auto sm:m-0 flex justify-between gap-x-1 reem text-xl leading-9 pb-3 uppercase'>
                                    Burgers
                                    <span className='border border-black inline-block absolute top-[24px] left-[110px] w-32 border-b-[1px] border-dashed'></span>
                                    <span className='pl-[122px]'> Rs 800</span>
                                </h3>
                                <p
                                    className='text-[#705448] max-w-[412px]'>
                                    lamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={slideInFromRight(0.8)}
                    >
                        <div className='flex xs:items-center justify-center md:justify-normal sm:items-normal xs:flex-col sm:flex-row gap-x-5'>
                            <div>
                                <img className='pt-10 w-[121px] h-[142px]' src="/menu/3.webp" alt="menu-img" loading="lazy" />
                            </div>
                            <div className='max-w-[600px] pt-4'>
                                <h3 className='relative max-w-[325px] xs:m-auto sm:m-0 flex justify-between reem text-xl leading-9 pb-3 uppercase'>
                                    Pancakes
                                    <span className='border border-black inline-block absolute top-[24px] left-[120px] w-32 border-b-[1px] border-dashed'></span>
                                    <span className='pl-[122px]'> Rs 600</span>
                                </h3>
                                <p
                                    className='text-[#705448] max-w-[412px]'>
                                    lamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu
                                </p>
                            </div>
                        </div>
                        <div className='flex xs:items-center justify-center md:justify-normal sm:items-normal xs:flex-col sm:flex-row gap-x-5'>
                            <div>
                                <img className='pt-10 w-[121px] h-[142px]' src="/menu/4.webp" alt="menu-img" loading="lazy" />
                            </div>
                            <div className='max-w-[600px] pt-4'>
                                <h3 className='relative max-w-[325px] xs:m-auto sm:m-0 flex justify-between reem text-xl leading-9 pb-3 uppercase'>
                                    Desserts
                                    <span className='border border-black inline-block absolute top-[24px] left-[120px] w-32 border-b-[1px] border-dashed'></span>
                                    <span className='pl-[122px]'> Rs 700</span>
                                </h3>
                                <p
                                    className='text-[#705448] max-w-[412px]'>
                                    lamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Menu
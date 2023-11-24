'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import ReservationForm from '../sub/ReservationForm';
import Button from '../Ui/Button';

const Reservation = () => {
    return (
        <div className='bg-[#301808]'>
            <div className='container m-auto py-11 '>
                <div className='flex flex-col text-white pb-6'>
                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.3 }}
                    >
                        <h3 className='relative reem text-[34px] leading-9 flex justify-between flex-col pb-3 uppercase'>
                            Reservation
                            <span className='text-2xl capitalize leading-9 reem'> Book Your Table</span>
                        </h3>
                    </motion.div>
                </div>
                <ReservationForm />
                <motion.div
                    className='flex justify-center pt-[79px]'
                    variants={slideInFromLeft(0.7)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.5 }}
                >
                    <Button />
                </motion.div>
            </div>
        </div>
    )
}

export default Reservation
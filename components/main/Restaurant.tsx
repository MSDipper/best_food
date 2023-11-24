'use client';
import React from 'react';
import Post from '../sub/Post';
import Menu from '../sub/Menu';
import Event from '../sub/Event';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

const Restaurant = () => {
  return (
    <motion.div
      variants={slideInFromLeft(0.1)}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1 }}
      className='bg-[#FDBE9442]'>
      <Post />
      <Menu />
      <Event />
    </motion.div>
  )
}

export default Restaurant
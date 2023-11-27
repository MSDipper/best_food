import React from 'react';
import HeroContent from '@/components/sub/HeroContent';

const Hero = () => {
    return (
        <div className='bg-[url(/bg.webp)] relative flex flex-col h-full w-fullbg-no-repeat bg-cover bg-center min-h-screen z-0'>
            <HeroContent />
        </div>
    )
}

export default Hero
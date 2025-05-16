'use client';

import Lottie from 'lottie-react';
import heroAnimation from '@/assets/animations/connect-animation.json';

const HeroLottieAnimation = () => { 
    return (
        <Lottie animationData={heroAnimation} loop className="absolute  -top-[10rem] left-1/2  -translate-x-1/2  w-[70vw] -z-[1] opacity-5" />
    )
}

export default HeroLottieAnimation;
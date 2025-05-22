import React from 'react'
import { heroBgImage, heroCtaBtns, heroHeadings, heroImage } from '../utils/heroData'
import { motion as _motion, useScroll, useTransform } from "framer-motion"

function Hero() {
    return (
        <div id="hero-section" className='bg-darkGrayScale-700 w-full md:h-[calc(100vh-0px)] h-[calc(100vh-84px)] overflow-hidden pt-[84px] relative'>
            <div className='flex flex-col w-11/12 mx-auto h-full'>

                {/* heading */}
                <div className='flex flex-col items-center lg:mt-12 mt-16 sm:items-center gap-y-4 lg:gap-y-3'>
                    <h1 className='text-grayScale-100 lg:text-5xl text-2xl sm:text-3xl md:text-4xl lg:font-extrabold font-heading font-bold text-center leading-tight overflow-hidden'>{heroHeadings[0].content}</h1>
                    <p className='text-grayScale-400 lg:text-2xl text-sm sm:text-base md:text-xl lg:font-semibold font-body text-center lg:w-8/12 w-11/12 sm:w-10/12'>{heroHeadings[1].content}</p>
                </div>

                {/* CTA's */}
                <div className='flex flex-col sm:flex-row justify-center items-center lg:mt-12 mt-10 lg:gap-x-10 gap-y-4 sm:gap-y-0 sm:gap-x-4 lg:gap-y-0 w-full sm:w-auto mx-auto'>
                    {
                        heroCtaBtns.map((item) => {
                            return (
                                <button
                                    key={item.id}
                                    onClick={item.action}
                                    className={` w-10/12 sm:w-auto px-8 lg:px-12 py-2 rounded-2xl font-bold font-body text-base lg:text-lg text-center cursor-pointer transition-all duration-200 lg:hover:bg-darkGrayScale-400 z-20
                                    ${item.id == 2
                                            ? "backdrop-blur-sm text-grayScale-100 border-[1px] border-grayScale-500"
                                            : "backdrop-blur-xl bg-[rgba(188,191,187,0.13)] text-grayScale-100"} 
                                    `
                                    }>
                                    {item.name}
                                </button>
                            )
                        })
                    }
                </div>

                {/* Bull Image */}
                <div className='mt-12 lg:mt-10 flex justify-center z-30 relative overflow-hidden'>
                    <_motion.img
                        src={heroImage.imgLink}
                        alt={heroImage.imgName}
                        className='w-[80%] sm:w-[70%] md:w-[60%] lg:w-auto max-w-[600px] h-auto overflow-hidden'
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
            </div>

           
            
            <_motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                    duration: 5, 
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className='absolute lg:h-40 lg:w-36 -left-20 -bottom-10 z-10 rounded-full bg-[#ff3b30] blur-[150px]'
            />

            <_motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                    duration: 5, 
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className='absolute lg:h-40 lg:w-36 -right-20 bottom-10 z-10 rounded-full bg-[#46c559] blur-[150px]'
            />
            
            {/* Chart Image */}
            <_motion.img
                src={heroBgImage.imgLink}
                alt={heroBgImage.imgName}
                className='lg:-translate-y-9/12 opacity-12 z-20 lg:w-full lg:h-full scale-250 lg:scale-none -translate-y-4/5'
                style={{
                    scale: useTransform(useScroll().scrollY, [0, 1000], [1, 4])
                }}
            />

            <_motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: "reverse" }}
                className='absolute lg:hidden h-8 w-screen bottom-0 z-0 bg-[#028a195c] blur-[50px]'
            />
        </div>
    )
}

export default Hero
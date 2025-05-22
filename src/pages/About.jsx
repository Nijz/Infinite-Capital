import React from 'react'
import { aboutContent, aboutContentHeading, aboutHeading, aboutImage } from '../utils/aboutData'
import TiltedImage from '../components/ui/TiltedImage'
import { motion as _motion } from 'framer-motion'

function About() {
    return (
        <div id="about-section" className='bg-whiteScale min-h-fit w-screen lg:py-24 py-24'>
            <div className='w-11/12 mx-auto flex flex-col lg:gap-y-16 gap-y-8'>
                <div className='flex flex-col gap-y-2 items-center'>
                    <p className='font-heading lg:text-4xl text-2xl lg:tracking-wider text-center font-bold text-darkGrayScale-700 overflow-hidden'>{aboutHeading.content}</p>
                </div>
                <div className='flex flex-wrap w-full justify-center items-start gap-x-4 lg:mt-10 mt-4'>
                    <div className='w-full lg:w-fit flex justify-center items-center overflow-hidden'>
                        <_motion.img 
                            src={aboutImage.imgLink} 
                            alt={aboutImage.imgName} 
                            className='max-w-full'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                        />
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col gap-y-4 mt-4 lg:p-1 p-2'>
                        <p className='lg:text-2xl text-lg font-heading font-bold text-darkGrayScale-600'>
                            {aboutContentHeading.content}
                        </p>
                        <p className='font-body lg:text-lg text-sm font-normal text-darkGrayScale-500'>
                            {aboutContent.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
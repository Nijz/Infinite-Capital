import React from 'react'
import { heading, chips } from '../utils/strategyData'
import chartBg from '../assets/chart.png'
import { useTransform, useScroll, motion as _motion } from 'framer-motion'

const chipStyles = [
    'border-green-400 bg-green-50/40 text-green-900',
    'border-gray-400 bg-gray-50/40 text-gray-900',
    'border-yellow-400 bg-yellow-50/40 text-yellow-900',
    'border-blue-400 bg-blue-50/40 text-blue-900',
    'border-pink-400 bg-pink-50/40 text-pink-900',
]

function InvestmentAd() {
    return (
        <div id="investment-ad-section" className="relative w-full min-h-[40vh] bg-[#f8f9fa] flex flex-col items-center justify-center py-8 overflow-hidden">
            {/* Faint chart background with scroll scale effect */}
            <_motion.img 
                src={chartBg} 
                alt="chart background" 
                className="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
                style={{
                    scale: useTransform(
                        useScroll({
                            target: document.documentElement,
                            offset: ["start start", "end end"]
                        }).scrollYProgress,
                        [0, 2],
                        [1, 2.2]
                    )
                }}
            />
            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center select-none">
                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-extrabold text-black text-center tracking-widest mb-2 md:mb-4 font-heading overflow-hidden">
                    {heading.content}
                </h2>
                {/* Chips grid */}
                <div className="w-full max-w-5xl flex flex-wrap justify-center items-center gap-4 mt-6">
                    {chips.map((chip, idx) => (
                        <div
                            key={chip.id}
                            className={`lg:px-6 lg:py-3 py-1 px-4 font-body rounded-full border-2 font-extrabold text-lg md:text-2xl text-center shadow-sm transition-all duration-200 ${chipStyles[idx]} whitespace-nowrap`}
                        >
                            {chip.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InvestmentAd
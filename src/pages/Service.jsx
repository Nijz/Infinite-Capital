import React, { useState } from 'react'
import { headings, cards, cta } from '../utils/serviceData'
import { motion as _motion } from 'framer-motion'

const headingColors = [
    'text-green-400', // Wealth Management
    'text-fuchsia-500', // Investment Advisory
    'text-yellow-400', // Risk Management
    'text-blue-400', // Investment Planning
    'text-fuchsia-500', // Portfolio Diversification
]

function Service() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseMove = (e, cardId) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * 20; // Adjust 5 for tilt intensity
        const rotateY = (centerX - x) / centerX * 20; // Adjust 5 for tilt intensity
        setHoveredCard({ id: cardId, rotateX, rotateY });
    };

    return (
        <div id="service-section" className='w-full min-h-screen bg-darkGrayScale-700 lg:py-32 py-18 overflow-hidden relative'>
            <div className=" w-11/12 mx-auto flex flex-col items-center ">
                <_motion.div
                    className='lg:h-24 lg:w-24 bg-orange-400 absolute rounded-full blur-[100px] left-10'
                    animate={{
                        x: [0, 360, 360, 0],
                        y: [90, 270, 270, 90],
                        scale: [1, 2, 1, 2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'circInOut'
                    }}
                />
                {/* Headings */}
                <div className="w-full max-w-3xl mx-auto text-center mb-8">
                    <h2 className="lg:text-4xl text-2xl md:text-5xl font-bold text-gray-100 tracking-wide mb-2 font-heading overflow-hidden">{headings[0].content}</h2>
                    <p className="text-gray-400 lg:text-sm md:text-lg font-body mb-2 text-sm">{headings[1].content}</p>
                </div>

                {/* Cards Grid */}
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {cards.map((card, idx) => {
                        const isHovered = hoveredCard?.id === card.id;
                        return (
                            <_motion.div
                                key={card.id}
                                className="backdrop-blur-sm bg-darkGrayScale-700 border-[0.2px] border-white/[0.15] rounded-2xl p-6 flex flex-col h-full drop-shadow-lg"
                                onMouseMove={(e) => handleMouseMove(e, card.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                animate={isHovered ? {
                                    rotateX: hoveredCard.rotateX,
                                    rotateY: hoveredCard.rotateY,
                                } : {
                                    rotateX: 0,
                                    rotateY: 0,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                            >
                                <h3 className={`text-lg md:text-xl font-heading font-bold mb-2 ${headingColors[idx]}`}>{card.heading}</h3>
                                <p className="text-gray-300 text-sm md:text-base font-body">{card.body}</p>
                            </_motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="w-full max-w-2xl mx-auto text-center mt-8">
                    <h4 className="text-xl md:text-2xl font-extrabold text-gray-200 mb-4">{cta.content}</h4>
                    <button 
                        onClick={cta.action}
                        className="bg-[#1A2B4D] hover:bg-[#223a6b] text-gray-300 font-semibold px-8 py-3 rounded-xl text-base md:text-lg transition-all duration-200 border border-blue-700 shadow"
                    >
                        {cta.btnName}
                    </button>
                </div>
                <_motion.div
                    className='lg:h-24 lg:w-24 bg-blue-400 absolute rounded-full blur-[100px] right-10 bottom-20'
                    animate={{
                        x: [0, -360, -360, 0],
                        y: [-90, -270, -270, -90],
                        scale: [1, 2, 1, 2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'circInOut'
                    }}
                />
            </div>
        </div>
    )
}

export default Service
import React, { useState, useEffect } from 'react'
import { headings, telegramCard, investmentPlanCard } from '../utils/investmentData'
import { motion as _motion } from 'framer-motion'

function InvestmentPlanes() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {

        const handleMouseMoveGlobal = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMoveGlobal);

        return () => {
            window.removeEventListener('mousemove', handleMouseMoveGlobal);
        };
    }, []);

    const handleMouseMove = (e, cardId) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * 15; // Adjust 5 for tilt intensity
        const rotateY = (centerX - x) / centerX * 15; // Adjust 5 for tilt intensity
        setHoveredCard({ id: cardId, rotateX, rotateY });
    };

    return (
        <div id="investment-plans-section" className='w-full bg-darkGrayScale-700 lg:py-36 min-h-fit py-18 relative'>
            <_motion.div
                className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 pointer-events-none z-50"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                    mass: 0.5
                }}
                style={{
                    mixBlendMode: "difference"
                }}
            />
            <div className="w-11/12 mx-auto ">
                
                {/* Headings */}
                <div className="w-full max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-200 tracking-wide md:mb-2 mb-1 font-heading">{headings[0].content}</h2>
                    <p className="text-gray-400 text-xs md:text-base font-body mb-2">{headings[1].content}</p>
                </div>

                <_motion.div
                    className='lg:h-24 lg:w-24 bg-pink-400 absolute rounded-full blur-[100px] -left-10'
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <_motion.div
                    className='lg:h-24 lg:w-24 bg-blue-400 absolute rounded-full blur-[100px] -right-10'
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Cards Grid */}
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center items-stretch py-8">
                    {/* Telegram Card */}
                    <_motion.div
                        className="border-[0.2px] border-white/[0.01] backdrop-blur-lg bg-white/[0.02] rounded-2xl p-6  h-full shadow-md items-center cursor-pointer relative z-10"
                        onMouseMove={(e) => handleMouseMove(e, 'telegram')}
                        onMouseLeave={() => setHoveredCard(null)}
                        animate={hoveredCard?.id === 'telegram' ? {
                            rotateX: hoveredCard.rotateX,
                            rotateY: hoveredCard.rotateY,
                        } : {
                            rotateX: 0,
                            rotateY: 0,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                    >
                        <div className='w-11/12 mx-auto h-full flex flex-col font-body'>

                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-orange-500 text-center font-heading">{telegramCard[0].content}</h3>

                            <p className="text-gray-300 text-sm md:text-base font-body mb-4 mt-4 text-left">{telegramCard[1].content}</p>

                            <div className="mb-4 text-left w-full">
                                {telegramCard[2].content.map((item) => (
                                    <div key={item.id} className="text-gray-100 text-base md:text-lg font-semibold text-left">
                                        {item.line.includes('Month') ? (
                                            <>
                                                {item.line.split(':')[0]}:
                                                <span className="text-green-400 font-bold">{item.line.split(':')[1]}</span>
                                            </>
                                        ) : item.line}
                                    </div>
                                ))}
                            </div>
                            <button 
                                className="w-full bg-[#232323] hover:bg-[#333] text-gray-100 font-semibold py-2 rounded-xl text-base transition-all duration-200 mt-auto"
                                onClick={telegramCard[3].action}
                            >
                                {telegramCard[3].content}
                            </button>
                        </div>
                    </_motion.div>

                    {/* Investment Plan Card */}
                    <_motion.div
                        className="border-[0.2px] border-white/[0.01] backdrop-blur-lg bg-white/[0.02] rounded-2xl p-6 h-full shadow-md items-center cursor-pointer relative z-10"
                        onMouseMove={(e) => handleMouseMove(e, 'investment-plan')}
                        onMouseLeave={() => setHoveredCard(null)}
                        animate={hoveredCard?.id === 'investment-plan' ? {
                            rotateX: hoveredCard.rotateX,
                            rotateY: hoveredCard.rotateY,
                        } : {
                            rotateX: 0,
                            rotateY: 0,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                    >
                        <div className='w-11/12 mx-auto h-full flex flex-col'>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-orange-500 text-center font-heading">{investmentPlanCard[0].content}</h3>

                            <div className="mb-4 w-full font-body">
                                {investmentPlanCard[2].content.map((item) => (
                                    <div key={item.id} className="text-gray-300 text-base md:text-lg font-semibold text-left flex items-center gap-2">
                                        <span>{item.line}</span>
                                    </div>
                                ))}
                            </div>

                            <button 
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded-xl text-base transition-all duration-200 mt-auto"
                                onClick={investmentPlanCard[3].action}
                            >
                                {investmentPlanCard[3].content}
                            </button>
                        </div>
                    </_motion.div>

                    {/* Courses Card - replaced with horizontal ad stripe */}
                    
                </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center md:mt-4 mt-2">
                        <div className="w-full max-w-6xl mx-auto rounded-2xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 p-1 shadow-lg">
                            <div className="flex flex-col md:flex-row items-center justify-between bg-[#181818]/90 rounded-2xl px-6 py-5 gap-4">
                                <div className="flex items-center gap-3">
                                    <span className=" hidden text-3xl md:text-4xl">🎓</span>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg md:text-2xl font-bold text-white font-heading">Premium Trading Courses</span>
                                            <span className="md:ml-2 md:px-3 md:py-1 py-0.5 px-6 text-center rounded-full bg-yellow-400 text-black text-xs font-bold animate-pulse text-nowrap">Coming Soon</span>
                                        </div>
                                        <p className="text-gray-200 text-sm md:text-base font-body mt-1">Master trading with our upcoming expert-led, interactive courses. Stay tuned for exclusive content!</p>
                                    </div>
                                </div>
                                
                                <button className="w-full md:w-fit mt-3 md:mt-0 bg-white/10 border border-white/20 text-white font-semibold px-6 py-2 rounded-xl text-base cursor-not-allowed opacity-70 flex items-center gap-2">
                                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-5 h-5'><path strokeLinecap='round' strokeLinejoin='round' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' /></svg>
                                    Notify Me
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default InvestmentPlanes
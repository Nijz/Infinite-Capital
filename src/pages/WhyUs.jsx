import React, { useState } from 'react'
import { heading, cards } from '../utils/whyUsData'
import { motion as _motion } from 'framer-motion'

function WhyUs() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseMove = (e, cardRef, cardId) => {
        const rect = cardRef.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setHoveredCard({ id: cardId, x, y });
    };

    return (
        <div id="why-us-section" className="w-full bg-whiteScale py-12 px-2">
            <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-bold text-darkGrayScale-700 text-center mb-10 font-heading overflow-hidden">{heading.content}</h2>
                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full lg:overflow-visible select-none">
                    {cards.map((card, idx) => {
                        // Split bold part (before colon) and normal part (after colon)
                        const [bold, ...rest] = card.content.split(":");
                        const isHovered = hoveredCard?.id === card.id;
                        return (
                            <_motion.div
                                key={card.id}
                                className={`rounded-3xl p-6 h-full flex items-center justify-center text-center cursor-pointer relative z-10
                                    ${idx % 2 === 0 ? 'bg-darkGrayScale-700' : 'bg-darkGrayScale-500'}`}
                                whileHover={{ scale: 1.02 }}
                                onMouseMove={(e) => handleMouseMove(e, e.currentTarget, card.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                animate={isHovered ? {
                                    x: hoveredCard.x * 0.05,
                                    y: hoveredCard.y * 0.05,
                                } : {
                                    x: 0,
                                    y: 0
                                }}
                                transition={{
                                    type: "spring",
                                    damping: 15,
                                    stiffness: 150,
                                    mass: 0.1
                                }}
                            >
                                <span className="block text-lg md:text-xl font-bold mb-2 text-gray-200 font-body">
                                    {bold}:
                                    <span className="font-light">{rest.join(":")}</span>
                                </span>
                            </_motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default WhyUs
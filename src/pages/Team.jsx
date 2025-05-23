import React from 'react'
import { headings, cards, supportTeamCard } from '../utils/teamData'
import mukundImg from '../assets/muks.jpg'
import nikunjImg from '../assets/niks.jpg'
import {motion as _motion} from 'framer-motion'

function Team() {
    return (
        <div id="team-section" className="w-full bg-darkGrayScale-700 min-h-screen flex flex-col items-center lg:py-36 py-18 relative overflow-hidden">
            <_motion.div
                    className='md:h-24 md:w-24 h-16 w-16 bg-green-400 absolute rounded-full blur-[100px] left-10'
                    animate={{
                        x: [0, 360, 360, 0],
                        y: [90, 270, 270, 90],
                        scale: [1, 2, 3, 2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'circInOut'
                    }}
            />
            <_motion.div
                    className='md:h-24 md:w-24 h-16 w-16 bg-yellow-400 absolute rounded-full blur-[100px] right-10'
                    animate={{
                        x: [0, -360, -360, 0],
                        y: [90, 270, 270, 90],
                        scale: [1, 2, 3, 2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'circInOut'
                    }}
            />
            <div className="w-11/12 max-w-4xl mx-auto flex flex-col items-center">
                {/* Headings */}
                <h2 className="text-2xl md:text-4xl font-bold text-gray-100 text-center mb-2 font-heading tracking-wide overflow-hidden">
                    {headings[0].content}
                </h2>
                <p className="text-gray-400 text-base md:text-lg font-body mb-8 text-center">{headings[1].content}</p>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                    {/* CEO Card */}
                    <div
                        className="backdrop-blur-[25.2px] rounded-2xl flex flex-col items-center border-2 border-[rgba(11,218,149,0.06)] bg-[rgba(11,218,149,0.04)] md:p-6 p-4"
                    >
                        <img
                            src={nikunjImg}
                            alt="Nikunj Makadiya"
                            className=" aspect-square object-cover object-top lg:h-[340px] h-[250px] mb-4 w-full rounded-2xl"
                        />
                        <h3 className="text-green-400 text-xl md:text-2xl font-bold font-heading mb-1 w-full text-left break-words">{cards[0].title}</h3>
                        <div className="text-white text-base font-bold font-heading mb-1 w-full text-left break-words">{cards[0].subheadline}</div>
                        <p className="text-gray-300 text-sm md:text-base font-body mt-2 w-full text-left break-words">{cards[0].body}</p>
                    </div>

                    {/* Co-CEO Card */}
                    <div
                        className="backdrop-blur-[25.2px] rounded-2xl flex flex-col items-center border-2 border-[rgba(225,240,10,0.06)] bg-[rgba(225,240,10,0.04)] md:p-6 p-4"
                    >
                        <img
                            src={mukundImg}
                            alt="Mukund Chatarala"
                            className=" aspect-square object-cover object-top md:h-[340px] h-[250px] mb-4 w-full rounded-2xl"
                        />
                        <h3 className="text-yellow-400 text-xl md:text-2xl font-bold font-heading mb-1 w-full text-left break-words">{cards[1].title}</h3>
                        <div className="text-white text-base font-bold font-heading mb-1 w-full text-left break-words">{cards[1].subheadline}</div>
                        <p className="text-gray-300 text-sm md:text-base font-body mt-2 w-full text-left break-words">{cards[1].body}</p>
                    </div>

                    {/* Supporting Team Card - Full Width */}
                    <div
                        className="backdrop-blur-[25.2px] rounded-[25px] border-2 border-[rgba(10,194,240,0.06)] bg-[rgba(10,194,240,0.04)] p-4 md:p-8 flex flex-col justify-center col-span-1 md:col-span-2"
                    >
                        <h4 className="text-blue-400 text-lg md:text-xl font-bold font-heading mb-2">{supportTeamCard.title}</h4>
                        <p className="text-gray-300 text-sm md:text-base font-body break-words">{supportTeamCard.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
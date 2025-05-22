import React from 'react'
import { headings, cards, supportTeamCard } from '../utils/teamData'
import mukundImg from '../assets/nukundBhai.png'
import nikunjImg from '../assets/NikunjBhai.png'

function Team() {
    return (
        <div id="team-section" className="w-full bg-darkGrayScale-700 min-h-screen flex flex-col items-center lg:py-36 py-18">
            <div className="w-11/12 max-w-6xl mx-auto flex flex-col items-center">
                {/* Headings */}
                <h2 className="text-2xl md:text-4xl font-bold text-gray-100 text-center mb-2 font-heading tracking-wide overflow-hidden">
                    {headings[0].content}
                </h2>
                <p className="text-gray-400 text-base md:text-lg font-body mb-8 text-center">{headings[1].content}</p>
                {/* Team Cards */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full justify-center items-center mb-12 mt-10">
                    {/* CEO Card */}
                    <div
                        className="backdrop-blur-[25.2px] rounded-[25px] flex flex-col items-center border-2 border-[rgba(11,218,149,0.06)] bg-[rgba(11,218,149,0.04)] px-4 py-6 md:px-7 md:py-8 lg:px-8 lg:py-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[395px] min-h-[420px] md:min-h-[508px] overflow-hidden"
                    >
                        <img
                            src={nikunjImg}
                            alt="Nikunj Makadiya"
                            className="rounded-[25px] object-cover object-top mb-6 w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-[241px] max-w-[339px]"
                        />
                        <h3 className="text-green-400 text-xl md:text-2xl font-bold font-heading mb-1 w-full text-left break-words">{cards[0].title}</h3>
                        <div className="text-white text-base font-bold font-heading mb-1 w-full text-left break-words">{cards[0].subheadline}</div>
                        <p className="text-gray-300 text-sm md:text-base font-body mt-2 w-full text-left break-words">{cards[0].body}</p>
                    </div>
                    {/* Co-CEO Card */}
                    <div
                        className="backdrop-blur-[25.2px] rounded-[25px] flex flex-col items-center border-2 border-[rgba(225,240,10,0.06)] bg-[rgba(225,240,10,0.04)] px-4 py-6 md:px-7 md:py-8 lg:px-8 lg:py-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[395px] min-h-[420px] md:min-h-[508px] overflow-hidden"
                    >
                        <img
                            src={mukundImg}
                            alt="Mukund Chatarala"
                            className="rounded-[25px] object-cover object-top mb-6 w-full h-[190px] xs:h-[210px] sm:h-[230px] md:h-[264px] max-w-[339px]"
                        />
                        <h3 className="text-yellow-400 text-xl md:text-2xl font-bold font-heading mb-1 w-full text-left break-words">{cards[1].title}</h3>
                        <div className="text-white text-base font-bold font-heading mb-1 w-full text-left break-words">{cards[1].subheadline}</div>
                        <p className="text-gray-300 text-sm md:text-base font-body mt-2 w-full text-left break-words">{cards[1].body}</p>
                    </div>
                </div>
                {/* Supporting Team Card */}
                <div
                    className="backdrop-blur-[25.2px] rounded-[25px] mx-auto border-2 border-[rgba(10,194,240,0.06)] bg-[rgba(10,194,240,0.04)] w-full max-w-2xl md:max-w-3xl lg:max-w-[841px] min-h-[120px] md:min-h-[153px] p-4 md:p-8 flex flex-col justify-center"
                >
                    <h4 className="text-blue-400 text-lg md:text-xl font-bold font-heading mb-2">{supportTeamCard.title}</h4>
                    <p className="text-gray-300 text-sm md:text-base font-body break-words">{supportTeamCard.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Team
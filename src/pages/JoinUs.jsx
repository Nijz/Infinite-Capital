import React from 'react'
import { socialLinks } from '../utils/joinUsData'

function JoinUs() {
    return (
        <div id="join-us-section" className="min-h-fit flex flex-col items-center justify-center bg-[#0a0a0a] px-4 py-12">
            <h2 className="text-white text-lg md:text-4xl font-bold lg:mb-10 mb-2 text-center tracking-wide">JOIN US</h2>
            <div className="w-full max-w-5xl rounded-2xl border border-white/25 backdrop-blur-[18.6px] bg-darkGrayScale-700 flex flex-row flex-wrap items-center justify-center gap-4 md:gap-16 py-8 px-2 md:px-12 shadow-lg">
                {socialLinks.map((item) => (
                    <a
                        key={item.id}
                        href={item.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-110 focus:scale-110 outline-none"
                    >
                        <img
                            src={item.icon}
                            alt={item.type}
                            className="w-12 h-12 md:w-24 md:h-24 object-contain rounded-full shadow-md bg-transparent"
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default JoinUs
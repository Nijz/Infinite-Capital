import React, { useEffect, useRef } from 'react'
import { ad, bannerImg } from '../utils/adData'
import { motion as _motion, useMotionValue, useTransform, animate } from 'framer-motion'

function Banner() {
    // Create motion values for each number
    const count1 = useMotionValue(0);
    const count2 = useMotionValue(0);
    const count3 = useMotionValue(0);
    const bannerRef = useRef(null);

    // Transform motion values to display numbers with % or + symbol
    const display1 = useTransform(count1, (latest) => `${Math.round(latest)}%`);
    const display2 = useTransform(count2, (latest) => `${Math.round(latest)}+`);
    const display3 = useTransform(count3, (latest) => `${Math.round(latest)}%`);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Start animations when banner is in view
                        animate(count1, 95, { duration: 1.5, ease: "easeOut" });
                        animate(count2, 5, { duration: 1.5, ease: "easeOut" });
                        animate(count3, 30, { duration: 1.5, ease: "easeOut" });

                        // Disconnect observer after animation starts
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.3, // Start animation when 30% of the banner is visible
                rootMargin: '0px'
            }
        );

        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div 
            ref={bannerRef}
            id="banner-section" 
            className="relative w-full min-h-fit py-4 md:py-10 flex items-center justify-center overflow-hidden"
        >
            {/* Background image */}
            <img src={bannerImg.imgLink} alt="background" className="absolute inset-0 w-full h-full object-cover object-center z-0" style={{opacity:0.95}} />
            {/* Optional: subtle overlay for contrast */}
            <div className="absolute inset-0 bg-black/40 z-0" />
            {/* Content */}
            <div className="relative z-10 w-11/12 max-w-7xl mx-auto flex flex-row items-center justify-center py-4 md:py-10 gap-4 md:gap-8 lg:gap-16">
                {ad.map((item, idx) => (
                    <React.Fragment key={item.id}>
                        <div className="flex flex-col items-center justify-center text-center flex-1 min-w-[90px]">
                            <_motion.span 
                                className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FF5C1B]"
                                whileHover={{
                                    scale: [1, 1.1, 1],
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }
                                }}
                            >
                                {idx === 0 ? display1 : idx === 1 ? display2 : display3}
                            </_motion.span>
                            <span className={`text-sm xs:text-lg sm:text-xl md:text-2xl font-heading text-gray-100 mt-2 ${item.id === 2 ? 'text-xs overflow-hidden' : ''}`}>{item.subHeading}</span>
                        </div>
                        {idx !== ad.length - 1 && (
                            <div className="h-12 md:h-36 w-px bg-gray-500 mx-2 md:mx-4 lg:mx-8" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Banner
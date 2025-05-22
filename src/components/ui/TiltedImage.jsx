import React from 'react';
import { motion as _motion } from 'framer-motion';

const TiltedImage = ({ src, alt, className = '' }) => {
    return (
        <_motion.div
            className={`relative ${className}`}
            initial={{ rotateZ: -15 }}
            whileHover={{
                rotateZ: 0,
                scale: 1.05,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }
            }}
            style={{
                transformOrigin: "center center",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            }}
        >
            <_motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-lg"
                style={{
                    filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))"
                }}
            />
        </_motion.div>
    );
};

export default TiltedImage; 
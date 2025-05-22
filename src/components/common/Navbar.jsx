import React, { useState, useEffect } from 'react'
import { navLinks, navLogo } from '../../utils/heroData'
import Button from '../ui/Button'
import { motion as _motion, AnimatePresence } from 'framer-motion'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (sectionId) => {
        setIsMenuOpen(false);
        const element = document.getElementById(sectionId.slice(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`w-full text-gray-200 fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-darkGrayScale-700/80 backdrop-blur-md' : 'bg-darkGrayScale-700'}`}>
            <div className='lg:w-11/12 flex justify-between items-center lg:mx-auto lg:py-3 px-4 lg:px-0'>
                <div>
                    <a href="#hero-section">
                        <img src={navLogo.imgLink} alt={navLogo.imgName} className='lg:w-[134px] lg:h-[84px] w-[100px] h-[60px]'/>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex gap-x-10'>
                    {
                        navLinks.map((item) => {
                            return (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(item.link);
                                    }}
                                    className='font-heading text-md hover:text-orange-500 font-semibold cursor-pointer'
                                >
                                    {item.name}
                                </a>
                            )
                        })
                    }
                </div>

                {/* Desktop Button */}
                <div className='hidden lg:block'>
                    <a
                        href="#join-us-section"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation('#join-us-section');
                        }}
                    >
                        <Button
                            content={"Join Us"}
                            className={"font-body-md bg-[#2A2A2A] text-white px-8 py-2 rounded-2xl cursor-pointer hover:bg-grayScale-700 hover:border-[0.1px] transition-all duration-300"}
                        />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <_motion.button
                    className='lg:hidden text-white p-2'
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.95 }}
                >
                    <_motion.svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={isMenuOpen ? "open" : "closed"}
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {isMenuOpen ? (
                            <_motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                        ) : (
                            <_motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </_motion.svg>
                </_motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop Blur */}
                        <_motion.div 
                            className='lg:hidden inset-0 bg-black/50 backdrop-blur-sm z-40 fixed' 
                            style={{ top: '84px' }} 
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Mobile Menu Content */}
                        <_motion.div 
                            className='lg:hidden bg-darkGrayScale-700/95 backdrop-blur-md px-4 py-4 z-50 sticky w-full h-fit overflow-hidden '
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <_motion.div 
                                className='flex flex-col space-y-5 items-center'
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                            >
                                {navLinks.map((item) => (
                                    <_motion.a
                                        key={item.id}
                                        href={item.link}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation(item.link);
                                        }}
                                        className='font-heading text-lg hover:text-orange-500 font-semibold cursor-pointer'
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        {item.name}
                                    </_motion.a>
                                ))}
                                <_motion.div 
                                    className='pt-4'
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <a
                                        href="#join-us-section"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation('#join-us-section');
                                        }}
                                    >
                                        <Button
                                            content={"Join Us"}
                                            className={"font-heading text-lg bg-[#2A2A2A] text-white px-8 py-2 rounded-2xl cursor-pointer hover:bg-grayScale-700 hover:border-[0.1px] transition-all duration-300 w-full"}
                                        />
                                    </a>
                                </_motion.div>
                            </_motion.div>
                        </_motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar
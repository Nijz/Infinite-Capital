import React from 'react'
// Remove Link as we are not doing page navigation
// import { Link } from 'react-router-dom'
// import { socialLinks } from '../../utils/joinUsData'
import { contactUsCard } from '../../utils/contactUsData'
import BullLogo from '../../assets/BullLogo.png'
import { motion as _motion} from 'framer-motion'

function Footer() {
    // Extract contact info from contactUsCard
    const { infos } = contactUsCard
    const phoneInfo = infos.find(info => Array.isArray(info.content))
    const emailInfo = infos.find(info => typeof info.content === 'string' && info.content.includes('@'))
    const addressInfo = infos.find(info => typeof info.content === 'string' && info.content.includes('plazza'))

    // Define navigation links with section IDs for smooth scrolling
    const navLinks = [
        { name: 'Hero', path: '#hero-section' },
        { name: 'About', path: '#about-section' },
        { name: 'Service', path: '#service-section' },
        { name: 'Investment Plans', path: '#investment-plans-section' },
        { name: 'Why Us', path: '#why-us-section' },
        { name: 'Team', path: '#team-section' },
        { name: 'Join Us', path: '#join-us-section' },
        { name: 'Contact', path: '#contact-section' },
    ];

    return (
        <footer className="bg-darkGrayScale-700 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden">

            {/* Divider at the top of the footer */}
            <div className="w-full border-t border-gray-700 mb-8"></div>
            <div className="max-w-7xl w-full flex flex-col items-center gap-8">
                {/* Top Section: Logo */}
                <div className="flex justify-center">
                    {/* Logo link - scrolls to hero section */}
                    <a href="#hero-section">
                         <img src={BullLogo} alt="Infinite Capital Logo" className="h-36" />
                    </a>
                </div>

                {/* Middle Section: Contact Info */}
                <div className="w-full border-b border-gray-700 pb-8 flex flex-col md:flex-row justify-center items-center gap-6 text-white">
                     {phoneInfo && phoneInfo.content.map((phone) => (
                        <div key={phone.id} className="flex items-center gap-2">
                            <span role="img" aria-label="phone">☎️</span>
                            <span>+91 {phone.phoneNumber}</span>
                        </div>
                    ))}
                    {emailInfo && (
                        <div className="flex items-center gap-2">
                            <span role="img" aria-label="email">📧</span>
                            <a href={`mailto:${emailInfo.content}`} className="hover:text-orange-500 transition-colors duration-300">{emailInfo.content}</a>
                        </div>
                    )}
                    {addressInfo && (
                        <div className="flex items-start gap-2 text-center md:text-left">
                            <span role="img" aria-label="location">📍</span>
                            <span className="flex-1">{addressInfo.content.replace('📍 ', '')}</span>
                        </div>
                    )}
                </div>

                {/* Bottom Section: Navigation, Social, Copyright */}
                <div className="mt-4 w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                    {/* Navigation */}
                    <div className="text-center md:text-left">
                         <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    {/* Change Link to a tag and update href for smooth scrolling */}
                                    <a
                                        href={link.path}
                                        className="hover:text-orange-500 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    {/* <div className="flex justify-center space-x-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.id}
                                href={social.link || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-500 transition-colors duration-300"
                            >
                                {typeof social.icon === 'string' ? (
                                    <img src={social.icon} alt={social.type} className="w-6 h-6" />
                                ) : (
                                    <img src={social.icon.default || social.icon} alt={social.type} className="w-6 h-6" />
                                )}
                            </a>
                        ))}
                    </div> */}
                    <div className="">
                        Made by Nijen ❤️
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        &copy; {new Date().getFullYear()} Infinite Capital. All rights reserved.
                    </div>
                </div>
            </div>
             {/* Made by Nijen */}
             
            
            <_motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 2 }}
                transition={{ 
                    duration: 5, 
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className='absolute h-4 w-full bottom-2 z-10 rounded-full bg-[#0766f5] blur-[100px]'
            />
        </footer>
    )
}

export default Footer
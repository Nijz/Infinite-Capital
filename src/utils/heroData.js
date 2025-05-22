import NiksBullNavLogo from "../assets/NiksBullLogo.png"
import Bull from "../assets/BullLogo.png"
import Charts from "../assets/chart.png"

export const navLinks = [
    {
        id: 1,
        name: "Home",
        link: "#hero-section"
    },
    {
        id: 2,
        name: "About",
        link: "#about-section"
    },
    {
        id: 3,
        name: "Service",
        link: "#service-section"
    },
    {
        id: 4,
        name: "Investment Plans",
        link: "#investment-plans-section"
    },
    {
        id: 5,
        name: "Team",
        link: "#team-section"
    },
    {
        id: 6,
        name: "Contact Us",
        link: "#contact-section"
    }
]

export const navLogo = {
    imgName: "Navbar Logo",
    imgLink: NiksBullNavLogo
}

export const heroHeadings = [
    {
        id: 1,
        type: "Heading",
        content: "Where Smart Investments Meet Trusted Guidance.",
        gradientTexts: ["Investments", "Guidance"]
    },
    {
        id: 1,
        type: "Sub-Heading",
        content: "Infinite Capital empowers you with proven methods, technical expertise, and results that out perform traditional returns.",
    }
]

export const heroCtaBtns = [
    {
        id: 1,
        name: "Join Telegram",
        action: () => {
            window.open('https://t.me/Banknifty_Nifty_sensex_calls');
        },
        type: "Primary"
    },
    {
        id: 2,
        name: "Investment Plans",
        action: () => {
            const element = document.getElementById('investment-plans-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        type: "Secondary"
    }
]

export const heroImage = {
    imgName: "Infinite Captial Logo",
    imgLink: Bull
}

export const heroBgImage = {
    imgName: "CandleStick Charts",
    imgLink: Charts
}
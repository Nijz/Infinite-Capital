import instagram from '../assets/instagram.png';
import telegram from '../assets/telegram.png';
import whatsapp from '../assets/whatsapp.png';
import X from '../assets/X.png';
import youtube from '../assets/youtube.png';

export const socialLinks = [
    {
        id: 1,
        type: "Instagram",
        icon: instagram,
        action: () => {
            window.open('https://www.instagram.com/infinitecapital05/?igsh=N2RwcHZieTA1c3F6#')
        }
    },
    {
        id: 2,
        type: "Telegram",
        icon: telegram,
        action: () => {
            window.open('https://t.me/Banknifty_Nifty_sensex_calls');
        },
    },
    {
        id: 3,
        type: "Whatsapp",
        icon: whatsapp,
        action: () => {
            window.open('https://wa.me/qr/6MVEJBH63X2SN1')
        }
    },
    {
        id: 4,
        type: "X",
        icon: X,
        action: () => {
            window.open('https://x.com/infinitecapi?t=akh5LVk0xh7Rd2DrMbnnZw&s=08')
        }
    },
    {
        id: 5,
        type: "Youtube",
        icon: youtube,
        action: () => {
            window.open('http://www.youtube.com/@infinitecapital05')
        }
    },
]
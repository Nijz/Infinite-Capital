export const headings = [
    {
        id: 1,
        type: "Heading",
        content: "INVESTMENT PLANS",
    },
    {
        id: 2,
        type: "Sub-Heading",
        content: "Simple, Powerful, and Designed to Grow Your Wealth."
    }
]

export const telegramCard = [
    {
        id: 1, 
        type: "Heading",
        content: "Telegram Channel Subscription",
    },
    {
        id: 2, 
        type: "Description",
        content: "We have our Premium Trading Group in telegram where we provide daily market moment’s from that you can make money",
    },
    {
        id: 3, 
        type: "Body",
        content: [
            {
                id: 1,
                line: "One Month: 1999/-"
            },
            {
                id: 2,
                line: "Three Month’s: 5999/-"
            },
            {
                id: 3,
                line: "Six Month’s: 8999/-"
            },
        ],
    },
    {
        id: 4,
        type: "Button",
        content: "Subscribe Now",
        action: () => {
            const message = encodeURIComponent("Hello! I'm interested in enrolling for telegram subscription. My Good Name: ");
            const whatsappUrl = `https://wa.me/919484679440?text=${message}`;
            window.open(whatsappUrl, '_blank');
        }
    }
]

export const investmentPlanCard = [
    {
        id: 1,
        type: "Heading",
        content: "Investment Plan",
    }, 
    {
        id: 2,
        type: "Description",
        content: "At Infinite Capital, we offer a straightforward and reliable investment plan where your capital is managed by expert traders using proven technical analysis."
    },
    {
        id: 3,
        type: "Body",
        content: [
            {
                id:1,
                line: "For Investment Scheme... press the below button"
            }
        ]
    }, 
    {
        id: 4,
        type: "Button",
        content: "Invest Now",
        action: () => {
            const message = encodeURIComponent("Hello! I want to know about your investment scheme's and what is the prcedure. My Good Name: ");
            const whatsappUrl = `https://wa.me/919484679440?text=${message}`;
            window.open(whatsappUrl, '_blank');
        }
    }
]
export const courseCards = [

    {
        id: 1,
        type: "Heading",
        content: "Our Premium Courses"
    },
    {
        id: 2,
        type: "Cards",
        content: [
            {
                id: 1,
                data: "Live Master Class: Trading"
            },
            {
                id: 2,
                data: "Zero to Advance Trading Recorded Course"
            }
        ]
    },
    {
        id: 3,
        type: "Button",
        content: "Coming Soon"
    }
]
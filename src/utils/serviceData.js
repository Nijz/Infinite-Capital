export const headings = [
    {
        id: 1,
        type: " Heading",
        content: "CORE SERVICES"
    },
    {
        id: 2,
        type: "Sub-Heading",
        content: "Comprehensive Financial Solutions Tailored to Your Goals."
    }
]

export const cards = [
    {
        id: 1,
        heading: "Wealth Management",
        body: "We manage your capital with a long-term vision. Our team creates personalized wealth-building strategies that protect your assets and grow your portfolio over time through smart allocation and disciplined rebalancing."
    },
    {
        id: 2,
        heading: "Investment Advisory",
        body: "Receive actionable investment advice backed by real-time market analysis and technical insights. We guide you through what to invest in, when to enter or exit, and how to build your position with confidence."
    },
    {
        id: 3,
        heading: "Risk Management",
        body: "Markets are unpredictable — but your strategy shouldn't be. We help you manage risk using smart tools, advanced technical analysis, and capital protection techniques to keep your money safer."
    },
    {
        id: 4,
        heading: "Investment Planning",
        body: "Whether you're investing for retirement, passive income, or aggressive growth, we build customized investment plans aligned with your timeline, risk appetite, and financial goals."
    },
    {
        id: 5,
        heading: "Portfolio Diversification",
        body: "Reduce your risk and increase returns by spreading investments across well-researched asset classes. We use modern diversification strategies to shield you from market volatility."
    }
]
export const cta = {
    id: 1,
    content: "Interested in a personalized strategy?",
    btnName: "Schedule a Consultation",
    whatsappNumber: "+916355844895",
    action: () => {
      const message = encodeURIComponent("Hello! I'm interested in scheduling a consultation for financial services.");
      const whatsappUrl = `https://wa.me/916355844895?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };
  
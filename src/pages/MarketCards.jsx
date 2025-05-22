import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import placeholder icons (replace with your actual icon files in src/assets)
function MarketCards() {

    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarketData = async () => {

            try {
                setLoading(true);
                setError(null); // Clear previous errors on new fetch attempt

                // --- START: Replace this section with your actual API calls ---
                // You will need to find a financial data API that provides NSE data.
                // Examples of potential APIs (research and choose one that suits your needs):
                // - Alpha Vantage
                // - Twelve Data
                // - Financial Modeling Prep
                // - Unofficial NSE APIs (use with caution, check terms and reliability)

                // Replace with your actual API endpoints and API key
                // Consider using environment variables for API keys (e.g., process.env.REACT_APP_API_KEY)
                // You might need a backend proxy to handle CORS issues and secure your API key.

                // Example API calls (THESE ARE PLACEHOLDERS - REPLACE WITH REAL API CALLS)
                const niftyResponse = await axios.get('YOUR_NIFTY_API_ENDPOINT', { params: { apikey: 'YOUR_API_KEY' } });
                const sensexResponse = await axios.get('YOUR_SENSEX_API_ENDPOINT', { params: { apikey: 'YOUR_API_KEY' } });
                const bankniftyResponse = await axios.get('YOUR_BANKNIFTY_API_ENDPOINT', { params: { apikey: 'YOUR_API_KEY' } });

                // Process the responses and format the data into the structure expected by the component.
                // The exact way to access price, change, etc., depends on the API response structure.
                const fetchedData = [
                     {
                         id: 1,
                         name: 'NIFTY 50',
                         subLabel: 'Nifty fifty',
                         // *** Adjust these lines based on your API response structure ***
                         price: `${niftyResponse.data.price} Rs`, // Example: Accessing price
                         change: niftyResponse.data.change, // Example: Accessing change string (+/- percentage)
                         isPositive: niftyResponse.data.change ? niftyResponse.data.change.startsWith('+') : false, // Example: Check if change string starts with '+'
                         // *************************************************************

                     },
                     {
                         id: 2,
                         name: 'SENSEX',
                         subLabel: 'BSE Sensex',
                         // *** Adjust these lines based on your API response structure ***
                         price: `${sensexResponse.data.price} Rs`, // Example: Accessing price
                         change: sensexResponse.data.change, // Example: Accessing change string
                         isPositive: sensexResponse.data.change ? sensexResponse.data.change.startsWith('+') : false, // Example: Check if change string starts with '+'
                         // *************************************************************

                     },
                     {
                         id: 3,
                         name: 'BANKNIFTY',
                         subLabel: 'Bank Nifty',
                         // *** Adjust these lines based on your API response structure ***
                         price: `${bankniftyResponse.data.price} Rs`, // Example: Accessing price
                         change: bankniftyResponse.data.change, // Example: Accessing change string
                         isPositive: bankniftyResponse.data.change ? bankniftyResponse.data.change.startsWith('+') : false, // Example: Check if change string starts with '+'
                         // *************************************************************

                     },
                ];

                setMarketData(fetchedData);

                // --- END: Replace the above section with your actual API calls and data processing ---

            } catch (err) {
                console.error("Error fetching market data:", err);
                 // More specific error handling might be needed based on API responses
                if (err.response && err.response.status === 401) {
                     setError("Authentication failed. Check your API key.");
                } else if (err.request) {
                     setError("Network error or no response from API. Check endpoint and connectivity.");
                } else {
                     setError("Failed to fetch market data. Please try again later.");
                }
                setMarketData([]); // Clear data on error
            } finally {
                setLoading(false);
            }
        };

        fetchMarketData();

        // Optional: Set up interval for periodic updates (be mindful of API limits and costs)
        // const intervalId = setInterval(fetchMarketData, 60000); // e.g., update every 60 seconds
        // return () => clearInterval(intervalId); // Cleanup interval on component unmount

    }, []); // Empty dependency array means this runs once on mount

    if (loading) return <div className="text-center text-white py-12">Loading market data...</div>;
    if (error) return <div className="text-center text-red-500 py-12">{error}</div>;
    if (marketData.length === 0 && !loading && !error) return <div className="text-center text-gray-400 py-12">No market data available. Check API setup.</div>;


    return (
        <div id="market-cards-section" className="w-full bg-darkGrayScale-700 py-12 px-4">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketData.map((card) => (
                    <div key={card.id} className="bg-gray-800 rounded-xl p-6 flex items-center space-x-4 shadow-lg">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            {/* Use the dynamically loaded icon */}
                            <img src={card.icon} alt={`${card.name} icon`} className="w-12 h-12 object-contain rounded-full" />
                        </div>
                        {/* Details */}
                        <div className="flex-grow flex flex-col">
                            <div className="text-white text-lg font-bold font-heading">{card.name}</div>
                            <div className="text-gray-400 text-sm font-body">{card.subLabel}</div>
                            <div className="text-white text-xl font-semibold font-body mt-2">{card.price}</div>
                        </div>
                        {/* Change */}
                        <div className={`text-right text-base font-semibold font-body ${card.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                            {card.change}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MarketCards; 
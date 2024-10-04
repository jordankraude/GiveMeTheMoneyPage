'use client';
import { useState } from 'react';

export default function DonationPage() {
  const [amount, setAmount] = useState(1000); // Default $10 donation
  const [loading, setLoading] = useState<boolean>(false); // State for loading

  const handleDonate = async () => {

    setLoading(true);
    const donationAmount = amount;
  
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: donationAmount }),
    });
  
    if (response.ok) {
      const { url } = await response.json();
      
      // Set session storage variable to indicate a donation was initiated

      sessionStorage.setItem('donationInitiated', 'true');
      window.location.href = url; // Redirect to Stripe Checkout URL
    } else {
      sessionStorage.setItem('donationInitiated', 'true');
      console.error('Error creating checkout session');
      setLoading(false);
    }
  };
  

  const handleChange = (e: any) => {
    const value = Number(e.target.value);
    // Set amount only if value is greater than or equal to 1
    if (value >= 1) {
      setAmount(value * 100); // Store the value in cents
    } else if (e.target.value === '') {
      setAmount(0); // Allow clearing the input
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-50'>
      <h1 className='text-3xl font-bold mb-6 text-[#3b150b]'>Make a Donation</h1>
      <p className='text-lg text-gray-600 mb-4'>Your generosity helps us make a difference!</p>
      <input 
        type="number" 
        value={amount > 0 ? amount / 100 : ''} // Show amount in USD or empty if 0
        onChange={handleChange} 
        placeholder="Enter donation amount in USD" 
        className='border border-gray-300 rounded-lg p-2 mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
      />
      <button 
        onClick={handleDonate} 
        className={`bg-[#5e17eb] hover:bg-[#3b150b] text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ${loading ? 'bg-[#3b150b] cursor-not-allowed' : ''}`} // Change color when loading
        disabled={amount === 0 || loading} // Disable button if amount is 0 or loading
      >
        {loading ? 'Processing...' : `Donate $${amount / 100}`} {/* Show loading text */}
      </button>
    </div>
  );
}

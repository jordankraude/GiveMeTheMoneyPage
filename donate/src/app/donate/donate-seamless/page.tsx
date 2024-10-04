'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation'; // Import useRouter
import Footer from '@/app/components/Footer';

const stripePromise = loadStripe('pk_test_51Q3VOtGBc05bKNreyq0OPY6OxBxmP41urK1enKtbfygMABhXtscvcaQxoCGmZ1rJbxOdbQvNS0M2kgO7kmbROtVm00mcNDZFgI'); // Replace with your Stripe publishable key or use an env variable

export default function DonatePage() {
  const router = useRouter(); // Initialize useRouter
  const [amount, setAmount] = useState(1000); // Default $10 donation
  const [cardElement, setCardElement] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const initializeStripe = async () => {
      const stripe = await stripePromise;

      if (!stripe) {
        setError('Failed to load Stripe. Please refresh the page.');
        return;
      }

      const elements = stripe.elements();
      const card = elements.create('card');
      card.mount('#card-element');
      setCardElement(card);

      card.on('change', (event) => {
        setError(event.error ? event.error.message : null);
      });
    };
    initializeStripe();
  }, []);

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const stripe = await stripePromise;

    if (!stripe) {
      setError('Stripe has not been initialized. Please refresh the page.');
      setLoading(false);
      return;
    }

    // Call your backend to create a Payment Intent
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
      const { error: apiError } = await response.json();
      setError(apiError || 'An unknown error occurred.'); // Handle unknown errors
      setLoading(false);
      return;
    }
    sessionStorage.setItem('donationInitiated', 'true');

    const { clientSecret } = await response.json();

    const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (stripeError) {
      setError(stripeError.message || 'An unknown error occurred.');
    } else {
      // Payment succeeded
      setAmount(1000); // Reset to default value
      cardElement.clear();

      // Redirect to the success page
      router.push('/donate/success'); // Change '/success' to your success page route
    }
    setLoading(false);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-50 px-4 sm:px-8'>
      <h1 className='text-4xl font-bold mb-8 text-[#3b150b]'>Donate</h1>
      <form onSubmit={handleDonate} className='bg-white p-8 rounded-lg shadow-lg w-full max-w-lg'>
        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Donation Amount (USD)</label>
          <input 
            type="number" 
            value={amount / 100} 
            onChange={(e) => setAmount(Math.max(Number(e.target.value) * 100, 100))} // Ensure minimum amount is $1
            placeholder="Enter donation amount in USD" 
            className='border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-indigo-500 transition'
          />
        </div>
        <div id="card-element" className='mb-6 p-3 border border-gray-300 rounded-lg'></div>
        {error && <div className='text-red-500 mb-4'>{error}</div>}
        <button 
          type="submit" 
          className={`w-full bg-[#5e17eb] hover:bg-[#3b150b] text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-300 ${loading ? 'bg-[#3b150b]' : ''}`}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Donate'}
        </button>
      </form>
    </div>
    
  );
  
}


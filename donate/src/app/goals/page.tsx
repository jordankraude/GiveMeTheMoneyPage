'use client';

import { useState, useEffect } from 'react';

export default function GoalsPage() {
  const [totalDonations, setTotalDonations] = useState(0);
  const goalAmount = 10000; // Example goal amount in cents ($100)

  useEffect(() => {
    // Simulate fetching total donations from an API
    const fetchDonations = async () => {
      // Here you would fetch from your API
      const response = await fetch('/api/get-donations'); // Replace with your API endpoint
      const data = await response.json();
      setTotalDonations(data.totalDonations); // Assuming the API returns an object with totalDonations
    };

    fetchDonations();
  }, []);

  const progressPercentage = (totalDonations / goalAmount) * 100;

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-50 p-4'>
      <h1 className='text-4xl font-bold mb-4 text-[#3b150b]'>Our Donation Goals</h1>
      <p className='text-lg text-gray-600 mb-6'>
        Help us reach our goal of ${goalAmount / 100}!
      </p>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-4'>
        <h2 className='text-2xl font-semibold mb-2 text-[#3b150b]'>Current Donations: ${totalDonations / 100}</h2>
        <div className='relative w-full h-6 bg-gray-200 rounded'>
          <div 
            className='absolute top-0 left-0 h-full bg-blue-600 rounded'
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className='text-center mt-2 text-sm text-gray-600'>{progressPercentage.toFixed(2)}% of goal reached</p>
      </div>
      <button 
        onClick={() => window.location.href = '/donate/donate-third'} // Redirect to the donation page
        className='mt-6 bg-[#5e17eb] hover:bg-[#3b150b] text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300'
      >
        Make a Donation
      </button>
    </div>
  );
}

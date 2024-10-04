'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SuccessPage() {
  const router = useRouter();

  // useEffect(() => {
  //   // Check if the donation was initiated
  //   const donationInitiated = sessionStorage.getItem('donationInitiated');

  //   if (!donationInitiated) {
  //     // If not, redirect to the donation page
  //     router.push('/donate/donate-third'); // Adjust the path as necessary
  //   } else {
  //     // Clear the session variable after successful navigation
  //     sessionStorage.removeItem('donationInitiated');
  //   }
  // }, [router]);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-green-50'>
      <h1 className='text-4xl font-bold mb-4 text-green-600'>Thank You for Your Donation!</h1>
      <p className='text-lg text-gray-600 mb-8'>Your generosity makes a difference in our community.</p>
      <button 
        onClick={() => router.push('/')} // Redirect to the home page
        className='bg-[#5e17eb] hover:bg-[#3b150b] text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300'
      >
        Go to Home
      </button>
    </div>
  );
}
